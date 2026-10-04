'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  initializeOpenSourceModel, 
  findBestMakanVerdict, 
  MatchResult, 
  AIModelStatus 
} from '@/utils/aiEmbeddingMatcher';

export default function AnythingLahPage() {
  const [query, setQuery] = useState('');
  const [selectedVibes, setSelectedVibes] = useState<string[]>(['Rainy / Gloomy', 'Comfort Soup']);
  const [lazinessLevel, setLazinessLevel] = useState<'low' | 'medium' | 'extreme'>('extreme');
  const [budgetFilter, setBudgetFilter] = useState<'all' | 'budget' | 'mid' | 'splurge'>('all');

  const [aiStatus, setAiStatus] = useState<AIModelStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('Open-source AI ready to destroy your friend\'s indecision.');
  const [isCalculating, setIsCalculating] = useState(false);
  const [verdict, setVerdict] = useState<MatchResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Pre-load the open-source in-browser model on mount
  useEffect(() => {
    initializeOpenSourceModel((status, msg) => {
      setAiStatus(status);
      setStatusMessage(msg);
    });
  }, []);

  const vibeOptions = [
    { label: '🌧️ Rainy / Gloomy', keyword: 'rainy soup warm broth' },
    { label: '☀️ Scorching Hot (Need AC)', keyword: 'aircon cool sanctuary indoor' },
    { label: '🪙 Broke Student (< RM12)', keyword: 'budget cheap affordable' },
    { label: '💼 Exhausted / Burnout', keyword: 'replenish herbal recovery tired' },
    { label: '🤤 Hangry (Fast Serving)', keyword: 'rice hearty instant filling' },
    { label: '🌶️ Need Spicy Wakeup', keyword: 'spicy pedas sambal sour tangy' },
    { label: '👑 Treat Myself', keyword: 'luxury seafood feast reward' },
    { label: '🥟 Light Bites', keyword: 'dim sum snacks sweet' },
  ];

  const toggleVibe = (keyword: string) => {
    if (selectedVibes.includes(keyword)) {
      setSelectedVibes(selectedVibes.filter(v => v !== keyword));
    } else {
      setSelectedVibes([...selectedVibes, keyword]);
    }
  };

  const handleDecide = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsCalculating(true);
    setVerdict(null);

    try {
      const result = await findBestMakanVerdict(
        query || 'I am hungry and indecisive',
        selectedVibes,
        lazinessLevel,
        budgetFilter,
        (status, msg) => {
          setAiStatus(status);
          setStatusMessage(msg);
        }
      );
      setVerdict(result);
    } catch (err) {
      console.error('Verdict calculation failed:', err);
    } finally {
      setIsCalculating(false);
    }
  };

  const handleCopyWhatsApp = () => {
    if (!verdict) return;
    const text = `📢 *OFFICIAL MAKAN VERDICT (No More 'Anything Lah'!)* 🎯\n\n` +
      `🍽️ *Dish:* ${verdict.dish.name}\n` +
      `📍 *Stall:* ${verdict.dish.stallName}\n` +
      `🚆 *Transit:* ${verdict.dish.transitStation} (${verdict.dish.transitLine})\n` +
      `🚶 *Walk:* ${verdict.dish.walkMinutes} mins ${verdict.dish.hasCoveredWalkway ? '(Covered Walkway! 🛡️)' : ''}\n` +
      `💰 *Damage:* ${verdict.dish.priceRange}\n\n` +
      `🤫 *Anti-Excuse Defense:*\n` +
      `• Too far? ${verdict.dish.antiExcuses.tooFar}\n` +
      `• Expensive? ${verdict.dish.antiExcuses.expensive}\n\n` +
      `🗺️ Google Maps: ${verdict.dish.googleMapsUrl}\n\n` +
      `_Decided by Rasa Malaysia AI - stop debating, let's go makan!_`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="decider-page">
      <main className="decider-container">
        {/* Header Section */}
        <header className="decider-header">
          <span className="badge-tag">HACKTOBERFEST 2026: BUILD FOR A FRIEND</span>
          <h1 style={{ fontFamily: 'var(--font-heading)' }}>
            🎯 The &quot;Anything Lah!&quot; Indecision Destroyer
          </h1>
          <p className="decider-subtitle">
            Built for that one friend who <em>always</em> says &quot;Anything lah, you pick&quot; — and then rejects every single idea.
          </p>

          {/* Open-Source AI Architecture Banner */}
          <div className="ai-badge-banner glass-container">
            <div className="ai-badge-status">
              <span className={`status-indicator ${aiStatus}`} />
              <strong>Open-Source AI at Core:</strong> {statusMessage}
            </div>
            <p className="ai-badge-desc">
              Runs in-browser via <code>@huggingface/transformers</code> open weights (<code>Xenova/all-MiniLM-L6-v2</code>). 
              <strong> 100% private, 0 cloud API tokens, runs on your friend&apos;s phone offline inside MRT tunnels.</strong>
            </p>
          </div>
        </header>

        {/* Input Form & Interactive Controls */}
        <section className="decider-input-card glass-container">
          <form onSubmit={handleDecide}>
            {/* Free-form Rant Input */}
            <div className="input-group">
              <label htmlFor="friend-rant">
                <strong>1. What is your friend subtly grumbling about right now?</strong>
              </label>
              <textarea
                id="friend-rant"
                className="decider-textarea"
                rows={3}
                placeholder="e.g. 'I am exhausted from exams, it is raining cats and dogs, my bank account is crying, but I need something warm and soupy...'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Vibe Chips Selector */}
            <div className="input-group">
              <label>
                <strong>2. Tag their hidden vibe (Multi-select):</strong>
              </label>
              <div className="vibe-chips-grid">
                {vibeOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.keyword}
                    className={`vibe-chip ${selectedVibes.includes(opt.keyword) ? 'active' : ''}`}
                    onClick={() => toggleVibe(opt.keyword)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Laziness & Transit Tolerance */}
            <div className="input-row">
              <div className="input-group-half">
                <label>
                  <strong>3. Friend&apos;s Laziness Level:</strong>
                </label>
                <div className="radio-pills">
                  <button
                    type="button"
                    className={`pill-btn ${lazinessLevel === 'extreme' ? 'active' : ''}`}
                    onClick={() => setLazinessLevel('extreme')}
                  >
                    🦥 Maximum Laziness (Covered / &lt;4 mins)
                  </button>
                  <button
                    type="button"
                    className={`pill-btn ${lazinessLevel === 'medium' ? 'active' : ''}`}
                    onClick={() => setLazinessLevel('medium')}
                  >
                    🚶 Can Walk 5-7 mins
                  </button>
                  <button
                    type="button"
                    className={`pill-btn ${lazinessLevel === 'low' ? 'active' : ''}`}
                    onClick={() => setLazinessLevel('low')}
                  >
                    🚌 Bus / Van Adventurer
                  </button>
                </div>
              </div>

              {/* Budget Filter */}
              <div className="input-group-half">
                <label>
                  <strong>4. Budget Constraint:</strong>
                </label>
                <div className="radio-pills">
                  <button
                    type="button"
                    className={`pill-btn ${budgetFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setBudgetFilter('all')}
                  >
                    Any Price
                  </button>
                  <button
                    type="button"
                    className={`pill-btn ${budgetFilter === 'budget' ? 'active' : ''}`}
                    onClick={() => setBudgetFilter('budget')}
                  >
                    🪙 &lt; RM12 (Broke Student)
                  </button>
                  <button
                    type="button"
                    className={`pill-btn ${budgetFilter === 'mid' ? 'active' : ''}`}
                    onClick={() => setBudgetFilter('mid')}
                  >
                    💵 RM15 - RM25
                  </button>
                  <button
                    type="button"
                    className={`pill-btn ${budgetFilter === 'splurge' ? 'active' : ''}`}
                    onClick={() => setBudgetFilter('splurge')}
                  >
                    👑 Treat Yourself
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="decider-actions">
              <button
                type="submit"
                className="btn decider-submit-btn"
                disabled={isCalculating}
              >
                {isCalculating ? '⚡ Running Open-Source Inference...' : '🎯 Hand Down the Uncompromising Verdict'}
              </button>
            </div>
          </form>
        </section>

        {/* The Verdict Section */}
        {verdict && (
          <section className="verdict-section animate-verdict">
            <div className="verdict-header">
              <span className="verdict-badge">
                🎯 {verdict.score}% Match for Your Friend&apos;s Mood
              </span>
              <span className="engine-badge">
                ⚡ Vector Engine: {verdict.aiEngineUsed}
              </span>
            </div>

            <div className="verdict-card glass-container">
              <div className="verdict-image-col">
                <img 
                  src={verdict.dish.image} 
                  alt={verdict.dish.name} 
                  className="verdict-img" 
                />
                <span className="verdict-price-tag">
                  💰 {verdict.dish.priceRange}
                </span>
              </div>

              <div className="verdict-details-col">
                <h2 style={{ fontFamily: 'var(--font-heading)' }}>
                  {verdict.dish.name}
                </h2>
                <h3 className="verdict-stall">
                  📍 {verdict.dish.stallName}
                </h3>

                <div className="transit-brief">
                  <p>
                    <strong>🚆 Nearest Transit:</strong> {verdict.dish.transitStation} ({verdict.dish.transitLine})
                  </p>
                  <p>
                    <strong>🚶 Walking Effort:</strong> {verdict.dish.walkMinutes} mins 
                    {verdict.dish.hasCoveredWalkway ? ' (🛡️ Covered Walkway Available!)' : ''}
                    {verdict.dish.hasAircon ? ' (❄️ Air-Conditioned)' : ''}
                  </p>
                </div>

                {/* The Anti-Excuse Defense Section */}
                <div className="anti-excuse-box">
                  <h4>🛡️ Anti-Excuse Defense (Shut Down Their Complaints):</h4>
                  <ul>
                    <li>
                      <strong>❌ &quot;Too far lah!&quot;</strong>
                      <br />
                      👉 <em>{verdict.dish.antiExcuses.tooFar}</em>
                    </li>
                    <li>
                      <strong>❌ &quot;Too expensive lah!&quot;</strong>
                      <br />
                      👉 <em>{verdict.dish.antiExcuses.expensive}</em>
                    </li>
                    <li>
                      <strong>❌ &quot;Not in the mood lah!&quot;</strong>
                      <br />
                      👉 <em>{verdict.dish.antiExcuses.mood}</em>
                    </li>
                  </ul>
                </div>

                {/* Verdict Actions */}
                <div className="verdict-actions-row">
                  <a
                    href={verdict.dish.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    📍 Open Google Maps
                  </a>

                  <button
                    type="button"
                    className="btn whatsapp-btn"
                    onClick={handleCopyWhatsApp}
                  >
                    {copied ? '✅ Copied to Clipboard!' : '📋 Copy WhatsApp Defense for Group Chat'}
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => handleDecide()}
                  >
                    🎲 Reroll
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="back-link-row">
          <Link href="/blog" className="back-link">
            ← Back to Public Transit Food Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
