export interface DishLocation {
  id: string;
  name: string;
  stallName: string;
  category: string;
  image: string;
  priceRange: string;
  priceLevel: 'budget' | 'mid' | 'splurge'; // budget < RM12, mid RM12-25, splurge > RM25
  transitStation: string;
  transitLine: string;
  walkMinutes: number;
  hasCoveredWalkway: boolean;
  hasAircon: boolean;
  vibeKeywords: string[];
  semanticProfile: string;
  antiExcuses: {
    tooFar: string;
    expensive: string;
    mood: string;
  };
  googleMapsUrl: string;
}

export const DISHES_DATABASE: DishLocation[] = [
  {
    id: 'nasi-lemak',
    name: 'Classic Nasi Lemak with Crispy Chicken',
    stallName: 'Oriental Kopi, Mid Valley Megamall',
    category: 'Rice & Hearty',
    image: '/images/nasi-lemak.jpg',
    priceRange: 'RM 15 - RM 25',
    priceLevel: 'mid',
    transitStation: 'LRT Abdullah Hukum / KTM Mid Valley',
    transitLine: 'Kelana Jaya Line / KTM Port Klang Line',
    walkMinutes: 3,
    hasCoveredWalkway: true,
    hasAircon: true,
    vibeKeywords: ['comfort', 'spicy', 'fragrant', 'aircon', 'filling', 'chicken', 'rice', 'hangry'],
    semanticProfile: 'Fragrant rich coconut rice cooked with pandan leaf, spicy sweet sambal, golden crispy fried chicken thigh, peanuts, cucumber, boiled egg. Mall air conditioning sanctuary, hearty comfort food when you are starving and need satisfying carbs.',
    antiExcuses: {
      tooFar: "Direct covered link bridge from LRT Abdullah Hukum right into Mid Valley. You won't feel a drop of rain or sun.",
      expensive: "Massive portion with huge juicy fried chicken, high value-for-money compared to generic cafe food.",
      mood: "Nobody in Malaysia is ever 'not in the mood' for aromatic Nasi Lemak sambal. Stop bluffing."
    },
    googleMapsUrl: 'https://maps.google.com/?q=Oriental+Kopi+Mid+Valley'
  },
  {
    id: 'asam-laksa',
    name: 'Penang Asam Laksa & Char Kway Teow',
    stallName: 'Chow Yang Kopitiam, SS2/10',
    category: 'Noodles & Wok',
    image: '/images/laksa.jpg',
    priceRange: 'RM 8 - RM 15',
    priceLevel: 'budget',
    transitStation: 'LRT Taman Bahagia',
    transitLine: 'Kelana Jaya Line (then quick feeder van/bus)',
    walkMinutes: 6,
    hasCoveredWalkway: false,
    hasAircon: false,
    vibeKeywords: ['tangy', 'sour', 'spicy', 'wok hei', 'hawker', 'budget', 'appetizing', 'noodles'],
    semanticProfile: 'Sour, spicy tamarind and poached mackerel fish broth with thick slippery rice noodles, mint, pineapple, and shrimp paste. Wok hei smoky flat rice noodles with plump cockles and fresh prawns. Perfect when feeling sluggish and need sour tangy spice to wake up senses.',
    antiExcuses: {
      tooFar: "RapidKL on Demand van picks you straight from LRT Taman Bahagia for only RM2. Zero sweat.",
      expensive: "Traditional kopitiam hawker price! Under RM15 for authentic Penang flavors with big prawns.",
      mood: "Tamarind asam broth cuts through all afternoon lethargy. You'll thank me after the first spoon of broth."
    },
    googleMapsUrl: 'https://maps.google.com/?q=Chow+Yang+Kopitiam+SS2'
  },
  {
    id: 'curry-mee',
    name: 'Rich Coconut Curry Mee & He Kiaw Mee',
    stallName: 'Twins Brother Kopitiam, Ara Damansara',
    category: 'Soups & Noodles',
    image: '/images/Curry-mee.jpg',
    priceRange: 'RM 7 - RM 12',
    priceLevel: 'budget',
    transitStation: 'LRT Lembah Subang / Ara Damansara',
    transitLine: 'Kelana Jaya Line',
    walkMinutes: 5,
    hasCoveredWalkway: true,
    hasAircon: false,
    vibeKeywords: ['broth', 'curry', 'creamy', 'tofu', 'rainy', 'cheap', 'budget', 'comforting'],
    semanticProfile: 'Deep comforting coconut curry soup with yellow noodles, soaked spongy tofu puffs, shredded chicken, mint leaves, cockles, springy fish cakes. Warm soulful broth ideal for rainy gloomy days or when on a shoestring budget.',
    antiExcuses: {
      tooFar: "Feeder bus T807 drops you right in front at Ara Permata stop. Barely 50 steps of walking.",
      expensive: "Literally RM7 to RM10 for a full bowl with iced teh. Cheaper than your average fast food meal.",
      mood: "Rich coconut curry gravy soaking into spongy tofu puffs is the definition of comfort on a stressful day."
    },
    googleMapsUrl: 'https://maps.google.com/?q=Twins+Brother+Kopitiam+Ara+Damansara'
  },
  {
    id: 'chee-cheong-fun',
    name: 'Sweet Red Sauce Chee Cheong Fun & Dim Sum',
    stallName: 'Foo Hing Dim Sum, Taipan USJ',
    category: 'Dim Sum & Snacks',
    image: '/images/Sweet-Red-Sauce-Chee-Cheong-Fun.jpg',
    priceRange: 'RM 6 - RM 16',
    priceLevel: 'budget',
    transitStation: 'LRT Taipan',
    transitLine: 'Kelana Jaya Line',
    walkMinutes: 8,
    hasCoveredWalkway: true,
    hasAircon: true,
    vibeKeywords: ['dim sum', 'light', 'sweet', 'egg tart', 'aircon', 'covered walkway', 'sharing'],
    semanticProfile: 'Silky smooth steamed rice noodle rolls drenched in nostalgic sweet red sauce and savory chili, sesame seeds. Flaky multi-layer Portuguese egg tarts fresh from the oven, siew mai, har gao dumplings. Air conditioned, quick, not too heavy, perfect for mid-day cravings.',
    antiExcuses: {
      tooFar: "Continuous covered walkway along the commercial row straight from LRT Taipan station. No umbrella needed.",
      expensive: "Each dim sum basket is RM5 to RM8. You can eat light or feast, fully control your wallet.",
      mood: "Warm sweet red sauce chee cheong fun and piping hot egg tarts make anyone smile instantly."
    },
    googleMapsUrl: 'https://maps.google.com/?q=Foo+Hing+Dim+Sum+Taipan'
  },
  {
    id: 'bak-kut-teh',
    name: 'Herbal Bak Kut Teh & Black Vinegar Trotters',
    stallName: 'Yaw Fatt Restaurant, Summit USJ Mall',
    category: 'Herbal & Hearty',
    image: '/images/bah-kut-teh-and-Black-Vinegar-Pork-Trotter.jpg',
    priceRange: 'RM 15 - RM 25',
    priceLevel: 'mid',
    transitStation: 'LRT USJ 7',
    transitLine: 'Kelana Jaya Line / BRT Sunway',
    walkMinutes: 7,
    hasCoveredWalkway: true,
    hasAircon: true,
    vibeKeywords: ['herbal', 'pork ribs', 'soup', 'replenish', 'energy', 'rainy', 'mall', 'deep comfort'],
    semanticProfile: 'Slow-simmered herbal soup with tender meaty pork ribs, wolfberries, mushrooms, aromatic fried basmati rice, sticky savory-sour black vinegar pork trotters. Deep nourishing medicinal herbs to restore depleted energy after grueling work or study.',
    antiExcuses: {
      tooFar: "Direct straight 8-minute pavement walk from LRT USJ 7, plus Summit Mall is fully air-conditioned inside.",
      expensive: "Generous tender ribs and herbal soup refilled hot, tax-free pricing with quality fragrant basmati rice.",
      mood: "Rich herbal broth cures burnout, exhaustion, and bad moods in three spoonfuls."
    },
    googleMapsUrl: 'https://maps.google.com/?q=Summit+USJ+Mall'
  },
  {
    id: 'sang-har-mee',
    name: 'Silky Egg Gravy Freshwater Prawn Sang Har Mee',
    stallName: 'SS2 Oh Yeah Kopitiam',
    category: 'Seafood & Indulgence',
    image: '/images/Sang-Har-Mee.jpg',
    priceRange: 'RM 25 - RM 45',
    priceLevel: 'splurge',
    transitStation: 'LRT Taman Jaya',
    transitLine: 'Kelana Jaya Line (PJ City Bus PJ02 direct)',
    walkMinutes: 4,
    hasCoveredWalkway: false,
    hasAircon: false,
    vibeKeywords: ['seafood', 'prawns', 'indulgent', 'treat myself', 'rich', 'crispy noodles', 'reward'],
    semanticProfile: 'Giant freshwater river prawns cooked with golden silky eggy broth poured over hot crispy fried noodles. Rich sweet prawn head roe melting into savory broth. High indulgence, celebratory feast when you just survived a brutal week and need to treat yourself.',
    antiExcuses: {
      tooFar: "Free PJ City Bus PJ02 stops right at Komersial SS2 Poh Kong, stall is right in front of the stop.",
      expensive: "You worked hard this week, you deserve fresh giant river prawns instead of boring canteen food.",
      mood: "Crispy noodles soaked in golden prawn-roe egg gravy is luxury comfort food at its finest."
    },
    googleMapsUrl: 'https://maps.google.com/?q=SS2+Oh+Yeah'
  }
];
