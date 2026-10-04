'use client';
import { DISHES_DATABASE, DishLocation } from '@/data/dishesData';

// Cache for model pipeline so we don't reload weights repeatedly
let extractorPipeline: any = null;
let isPipelineLoading = false;
const dishEmbeddingCache = new Map<string, number[]>();

export type AIModelStatus = 'idle' | 'loading_model' | 'model_ready' | 'inferencing' | 'offline_heuristic';

export interface MatchResult {
  dish: DishLocation;
  score: number; // 0 to 100
  semanticScore: number; // 0 to 1
  lazinessPenalty: number;
  matchReasons: string[];
  aiEngineUsed: 'In-Browser Transformers (all-MiniLM-L6-v2)' | 'Local Semantic Embedding Engine';
}

/**
 * Calculates cosine similarity between two numeric vectors.
 */
function cosineSimilarity(vecA: number[] | Float32Array, vecB: number[] | Float32Array): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  const magnitude = Math.sqrt(normA) * Math.sqrt(normB);
  return magnitude === 0 ? 0 : dotProduct / magnitude;
}

/**
 * Robust local fallback embedding based on bag-of-words and semantic features.
 * Guarantees zero latency and offline resilience if transformers.js is downloading.
 */
function generateLocalSemanticVector(text: string): number[] {
  const normalized = text.toLowerCase();
  const vector = new Array(32).fill(0);

  const keywords: Record<string, number> = {
    // Comfort & mood
    comfort: 0, warm: 0, soup: 1, broth: 1, spicy: 2, pedas: 2, sambal: 2,
    tired: 3, exhausted: 3, stress: 3, burnout: 3, reward: 4, treat: 4, celebrate: 4,
    rain: 5, cold: 5, gloomy: 5, hot: 6, sun: 6, sweat: 6, aircon: 6, mall: 6,
    // Food types
    rice: 7, nasi: 7, chicken: 7, noodles: 8, mee: 8, laksa: 8, dimsum: 9, sweet: 9,
    prawn: 10, seafood: 10, pork: 11, ribs: 11, herbal: 11, light: 12, heavy: 13,
    // Budget & laziness
    broke: 14, cheap: 14, budget: 14, student: 14, expensive: 15, rich: 15,
    lazy: 16, walk: 17, near: 17, close: 17, train: 18, lrt: 18, mrt: 18, station: 18,
    covered: 19, roof: 19, bus: 20, fast: 21, quick: 21, hangry: 22
  };

  const tokens = normalized.split(/[\s,.-]+/);
  for (const token of tokens) {
    if (keywords[token] !== undefined) {
      vector[keywords[token]] += 1.0;
    }
  }

  // Normalize vector
  let sumSq = 0;
  for (const val of vector) sumSq += val * val;
  const mag = Math.sqrt(sumSq);
  return mag === 0 ? vector : vector.map(v => v / mag);
}

/**
 * Initializes the in-browser open-weight model: Xenova/all-MiniLM-L6-v2
 */
export async function initializeOpenSourceModel(
  onStatusChange?: (status: AIModelStatus, message: string) => void
): Promise<any> {
  if (typeof window === 'undefined') return null;
  if (extractorPipeline) return extractorPipeline;
  if (isPipelineLoading) return null;

  isPipelineLoading = true;
  onStatusChange?.('loading_model', 'Loading open-weight model (Xenova/all-MiniLM-L6-v2) into browser memory...');

  try {
    const { pipeline, env } = await import('@huggingface/transformers');
    // Ensure browser environment settings
    env.allowLocalModels = false;
    if (env.backends?.onnx?.wasm) {
      env.backends.onnx.wasm.numThreads = 1;
    }

    extractorPipeline = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
      progress_callback: (progress: any) => {
        if (progress.status === 'progress') {
          const pct = Math.round((progress.loaded / progress.total) * 100);
          onStatusChange?.('loading_model', `Downloading weights: ${pct}% (cached in IndexedDB)`);
        }
      }
    });

    onStatusChange?.('model_ready', 'Open-weight transformer model initialized on device!');
    return extractorPipeline;
  } catch (err) {
    console.warn('Transformers.js model initialization deferred or fallback engaged:', err);
    onStatusChange?.('offline_heuristic', 'Using in-browser semantic embedding engine (offline resilient).');
    return null;
  } finally {
    isPipelineLoading = false;
  }
}

/**
 * Generates an embedding vector for a given text.
 */
async function getEmbedding(text: string): Promise<{ vector: number[]; isNeural: boolean }> {
  if (extractorPipeline) {
    try {
      const output = await extractorPipeline(text, { pooling: 'mean', normalize: true });
      const rawData = Array.from(output.data as Float32Array);
      return { vector: rawData, isNeural: true };
    } catch (e) {
      console.error('Error during neural inference, falling back to local vector:', e);
    }
  }
  return { vector: generateLocalSemanticVector(text), isNeural: false };
}

/**
 * Runs the "Anything Lah!" Indecision Destroyer algorithm.
 */
export async function findBestMakanVerdict(
  userQuery: string,
  selectedVibes: string[],
  lazinessLevel: 'low' | 'medium' | 'extreme', // extreme = cannot walk far, needs covered/AC
  budgetFilter: 'all' | 'budget' | 'mid' | 'splurge',
  onStatusChange?: (status: AIModelStatus, message: string) => void
): Promise<MatchResult> {
  onStatusChange?.('inferencing', 'Vectorizing friend mood and computing cosine similarities...');

  // Combine query and vibe tags into rich semantic input
  const fullInput = `${userQuery} ${selectedVibes.join(' ')} ${
    lazinessLevel === 'extreme' ? 'lazy avoid walking covered walkway aircon close to train' : ''
  }`.trim();

  const userEmbeddingResult = await getEmbedding(fullInput);
  const userVec = userEmbeddingResult.vector;

  const results: MatchResult[] = [];

  for (const dish of DISHES_DATABASE) {
    let dishVec: number[];

    if (userEmbeddingResult.isNeural) {
      if (!dishEmbeddingCache.has(dish.id)) {
        const dishText = `${dish.name} ${dish.category} ${dish.semanticProfile} ${dish.vibeKeywords.join(' ')}`;
        const embedded = await getEmbedding(dishText);
        dishEmbeddingCache.set(dish.id, embedded.vector);
      }
      dishVec = dishEmbeddingCache.get(dish.id)!;
    } else {
      dishVec = generateLocalSemanticVector(`${dish.name} ${dish.semanticProfile} ${dish.vibeKeywords.join(' ')}`);
    }

    const rawSimilarity = cosineSimilarity(userVec, dishVec);
    // Normalize similarity between 0 and 1
    const semanticScore = Math.max(0, Math.min(1, (rawSimilarity + 1) / 2));

    // Calculate Laziness & Comfort Penalties / Bonuses
    let lazinessBonus = 0;
    if (lazinessLevel === 'extreme') {
      if (dish.walkMinutes <= 4) lazinessBonus += 0.15;
      if (dish.hasCoveredWalkway) lazinessBonus += 0.15;
      if (dish.hasAircon) lazinessBonus += 0.1;
      if (dish.walkMinutes > 7) lazinessBonus -= 0.2;
    } else if (lazinessLevel === 'medium') {
      if (dish.walkMinutes <= 6) lazinessBonus += 0.1;
      if (dish.hasCoveredWalkway) lazinessBonus += 0.05;
    }

    // Budget match bonus/penalty
    let budgetBonus = 0;
    if (budgetFilter !== 'all') {
      if (dish.priceLevel === budgetFilter) budgetBonus += 0.15;
      else budgetBonus -= 0.15;
    }

    // Total final score mapped to 65% - 99% range for exciting presentation
    const combinedScore = Math.max(0.65, Math.min(0.99, (semanticScore * 0.75) + lazinessBonus + budgetBonus));
    const finalScore = Math.round(combinedScore * 100);

    // Reasons why this was selected
    const matchReasons: string[] = [];
    if (dish.hasCoveredWalkway) matchReasons.push('🛡️ Covered walkway from LRT station (zero sun exposure)');
    if (dish.hasAircon) matchReasons.push('❄️ Air-conditioned dining sanctuary');
    if (dish.priceLevel === 'budget') matchReasons.push('🪙 Student & commuter wallet-friendly pricing');
    if (dish.walkMinutes <= 4) matchReasons.push(`⚡ Ultra-low walking time (${dish.walkMinutes} mins from platform)`);
    matchReasons.push(`🍜 High flavor match for: "${dish.category}"`);

    results.push({
      dish,
      score: finalScore,
      semanticScore,
      lazinessPenalty: lazinessBonus,
      matchReasons,
      aiEngineUsed: userEmbeddingResult.isNeural
        ? 'In-Browser Transformers (all-MiniLM-L6-v2)'
        : 'Local Semantic Embedding Engine'
    });
  }

  // Sort descending by highest score
  results.sort((a, b) => b.score - a.score);

  onStatusChange?.('model_ready', 'Inference complete! Uncompromising verdict ready.');
  return results[0];
}
