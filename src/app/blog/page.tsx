'use client';
import { useState, useEffect } from 'react';
import { BlogFeaturedPost } from '@/components/blog/BlogFeaturedPost';
import { BlogCard } from '@/components/blog/BlogCard';
import { CommentSection } from '@/components/blog/CommentSection';

const featuredArticle = {
  id: "article-1",
  title: "The Ultimate Nasi Lemak Experience at Mid Valley",
  summary: "Craving a rich, fragrant Nasi Lemak? Oriental Kopi at Mid Valley offers an incredibly satisfying plate that won't break the bank.",
  category: "Breakfast Classics",
  thumbnailUrl: "/images/nasi-lemak.jpg",
  transportInfo: "Accessible via KTM Mid Valley or LRT Abdullah Hukum (Kelana Jaya line).",
  mapLink: "https://maps.google.com/?q=Oriental+Kopi+Mid+Valley",
  priceRange: "RM 15 - RM 25"
};

const articles = [
  {
    id: "article-2",
    title: "Penang Asam Laksa & Char Kway Teow in SS2/10",
    summary: "Don't miss the authentic Penang flavors at SS2/10 Chow Yang Kopitiam. A perfect stop for a tangy, smoky lunch.",
    category: "Noodles & Wok",
    thumbnailUrl: "/images/laksa.jpg",
    transportInfo: "Take LRT Kelana Jaya line to LRT Taman Bahagia, then take grab (RM5 to RM7 around 11:30am to avoid peak hour high prices) or ride rapidkl van using Rapidkl on Demand app .",
    mapLink: "https://maps.google.com/?q=Chow+Yang+Kopitiam+SS2",
    priceRange: "RM 8 - RM 15"
  },
  {
    id: "article-3",
    title: "Curry Mee & He Kiaw Mee at Twins Brother Kopitiam",
    summary: "A hidden gem in Ara Damansara (Note: Not Twins Brother Seafood Restaurant!). This Kopitiam serves a soul-warming bowl of Curry Mee. Their drinks are also dirt-cheap and refreshing.",
    category: "Hidden Gems",
    thumbnailUrl: "/images/Curry-mee.jpg",
    transportInfo: "From LRT Lembah Subang, ride T807 and get off at Ara Permata station.",
    mapLink: "https://maps.google.com/?q=Twins+Brother+Kopitiam+Ara+Damansara",
    priceRange: "RM 7 - RM 12"
  },
  {
    id: "article-4",
    title: "Luxurious Sang Har Mee at SS2 Oh Yeah",
    summary: "Freshwater prawns cooked in a rich, eggy gravy served over crispy fried noodles. A luxurious treat that's easy to reach.",
    category: "Dinner Delights",
    thumbnailUrl: "/images/Sang-Har-Mee.jpg",
    transportInfo: "Arrive at Taman Jaya, then ride PJ City Bus (PJ02) to Komersial SS2 (Poh Kong) bus stop. OH Yeah Food stall is just front of it .",
    mapLink: "https://maps.google.com/?q=SS2+Oh+Yeah",
    priceRange: "RM 20 - RM 45"
  },
  {
    id: "article-5",
    title: "Taipan's Best Red Sauce Chee Cheong Fun",
    summary: "Steamed rice noodle rolls served with a distinct, sweet red sauce at Foo Hing Dim Sum in Taipan. Best mid-range price dim sum I ever had, their egg-tarts are must-try while others are also good-to-try",
    category: "Dim Sum & Snacks",
    thumbnailUrl: "/images/Sweet-Red-Sauce-Chee-Cheong-Fun.jpg",
    transportInfo: "Arrive at LRT Taipan in Kelana Jaya Line to Gombak. It will take a 9-minute walk along the covered-walkway then you will need to cross two streets before arriving. The dim sum restuarant is located beside the OCBC Bank.",
    mapLink: "https://maps.google.com/?q=Foo+Hing+Dim+Sum+Taipan",
    priceRange: "RM 5 - RM 15 per plate"
  },
  {
    id: "article-6",
    title: "Black Vinegar Pork Trotter and Bak Kut Teh at Summit USJ Yaw Fatt restaurant",
    summary: " A complex herbal soup with meaty pork ribs simmered for hours while the pork meat for both dishes are tender and juicy with accessible price (no tax). Their fried Basmati rice are fragment which is also must-try.",
    category: "Herbal Soups & Wok",
    thumbnailUrl: "/images/bah-kut-teh-and-Black-Vinegar-Pork-Trotter.jpg",
    transportInfo: "A 8-minute straight walk from LRT USJ 7. The mall is beside the senQ Easyhome.",
    mapLink: "https://maps.google.com/?q=Summit+USJ+Mall",
    priceRange: "RM 15 - RM 25"
  }
];

export default function Blog() {
  const wallpapers = [
    '/images/wallpaper-blog/artsy-trail.jpeg',
    '/images/wallpaper-blog/divine-trail.jpeg',
    '/images/wallpaper-blog/family-trail.jpeg',
    '/images/wallpaper-blog/heritage-trail.jpeg',
    '/images/wallpaper-blog/kl-downtown.jpeg',
    '/images/wallpaper-blog/nature-trail.jpeg',
    '/images/wallpaper-blog/shopping-trail.jpeg'
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % wallpapers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [wallpapers.length]);

  return (
    <div 
      className="blog-page blog-dynamic-bg"
      style={{ backgroundImage: `url('${wallpapers[currentBg]}')` }}
    >
      <header className="blog-header">
        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Public Transport Food Guide</h1>
        <p>Cheap, delicious, and accessible local food near LRT and MRT stations.</p>
      </header>

      <main className="blog-container">
        <section className="featured-section-blog">
          <BlogFeaturedPost article={featuredArticle} />
        </section>

        <section className="blog-main-content">
          <div className="blog-grid">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>

          <aside className="blog-sidebar">
             <div className="sticky-note">
                <h3>📌 Commuter's Toolkit</h3>
                <p>Must-have apps for navigating public transport!</p>
                <div className="sticky-note-content">
                  <ul>
                    <li>
                      <strong>myrapid PULSE:</strong> <br/>
                      <a href="https://myrapid.com.my/pulse/mobile-app/" target="_blank" rel="noopener noreferrer">View schedules</a>
                    </li>
                    <li>
                      <strong>Rapid On Demand:</strong> <br/>
                      <a href="https://myrapid.com.my/bus-train/rapid-kl/on-demand/" target="_blank" rel="noopener noreferrer">Book rides</a>
                    </li>
                    <li>
                      <strong>GOKL App:</strong> <br/>
                      <a href="https://share.google/SM4HxbFVW9M8FLa3j" target="_blank" rel="noopener noreferrer">App Store</a> | <a href="https://share.google/vkVrUz22xe80PwgGc" target="_blank" rel="noopener noreferrer">Google Play</a>
                    </li>
                    <li>
                      <strong>RapidKL Live Map:</strong> <br/>
                      <a href="https://share.google/s6rHRgVdWqmdhrDco" target="_blank" rel="noopener noreferrer">Track buses live</a>
                    </li>
                  </ul>
                </div>
             </div>
          </aside>
        </section>

        <CommentSection />
      </main>
      
      <footer className="glass-container">
        <p>&copy; 2026 Rasa Malaysia. Built for the DEV.to Frontend Challenge - Comfort Food Edition.</p>
      </footer>
    </div>
  );
}
