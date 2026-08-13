import { BlogFeaturedPost } from '@/components/blog/BlogFeaturedPost';
import { BlogCard } from '@/components/blog/BlogCard';

const featuredArticle = {
  id: "article-1",
  title: "The Ultimate Nasi Lemak Experience at Mid Valley",
  summary: "Craving a rich, fragrant Nasi Lemak? Oriental Kopi at Mid Valley offers an incredibly satisfying plate that won't break the bank.",
  category: "Breakfast Classics",
  thumbnailUrl: "/images/nasi-lemak.jpg",
  transportInfo: "Accessible via KTM Mid Valley or LRT Abdullah Hukum.",
  mapLink: "https://maps.google.com/?q=Oriental+Kopi+Mid+Valley"
};

const articles = [
  {
    id: "article-2",
    title: "Penang Asam Laksa & Char Kway Teow in SS2",
    summary: "Don't miss the authentic Penang flavors at SS2/10 Chow Yang Kopitiam. A perfect stop for a tangy, smoky lunch.",
    category: "Noodles & Wok",
    thumbnailUrl: "/images/laksa.jpg",
    transportInfo: "Take PJ City Bus or LRT Taman Bahagia.",
    mapLink: "https://maps.google.com/?q=Chow+Yang+Kopitiam+SS2"
  },
  {
    id: "article-3",
    title: "Curry Mee & He Kiaw Mee at Twins Brother Kopitiam",
    summary: "A hidden gem in Ara Damansara (Note: Not Twins Brother Seafood Restaurant!). This Kopitiam serves a soul-warming bowl of Curry Mee.",
    category: "Hidden Gems",
    thumbnailUrl: "/images/Curry-mee.jpg",
    transportInfo: "Just a short walk from LRT Ara Damansara.",
    mapLink: "https://maps.google.com/?q=Twins+Brother+Kopitiam+Ara+Damansara"
  },
  {
    id: "article-4",
    title: "Luxurious Sang Har Mee at SS2 Oh Yeah",
    summary: "Freshwater prawns cooked in a rich, eggy gravy served over crispy fried noodles. A luxurious treat that's easy to reach.",
    category: "Dinner Delights",
    thumbnailUrl: "/images/Sang-Har-Mee.jpg",
    transportInfo: "Accessible via PJ City Bus (near LRT Taman Bahagia).",
    mapLink: "https://maps.google.com/?q=SS2+Oh+Yeah"
  },
  {
    id: "article-5",
    title: "Taipan's Best Chee Cheong Fun",
    summary: "Steamed rice noodle rolls served with a distinct, sweet red sauce at Foo Hing Dim Sum in Taipan.",
    category: "Dim Sum & Snacks",
    thumbnailUrl: "/images/Sweet-Red-Sauce-Chee-Cheong-Fun.jpg",
    transportInfo: "Very convenient, located right near LRT Taipan.",
    mapLink: "https://maps.google.com/?q=Foo+Hing+Dim+Sum+Taipan"
  },
  {
    id: "article-6",
    title: "Hearty Bak Kut Teh at Summit USJ",
    summary: "A complex herbal soup with meaty pork ribs simmered for hours, located right inside Summit USJ Mall.",
    category: "Herbal Soups",
    thumbnailUrl: "/images/bah-kut-teh-and-Black-Vinegar-Pork-Trotter.jpg",
    transportInfo: "A short walk from LRT USJ 7.",
    mapLink: "https://maps.google.com/?q=Summit+USJ+Mall"
  }
];

export default function Blog() {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1 style={{ fontFamily: 'var(--font-heading)' }}>Public Transport Food Guide</h1>
        <p>Cheap, delicious, and accessible local food near LRT and MRT stations.</p>
      </header>

      <main className="blog-container">
        <section className="featured-section-blog">
          <BlogFeaturedPost article={featuredArticle} />
        </section>

        <section className="blog-grid-section">
          <div className="blog-tabs glass-container">
             <button className="tab active">View all</button>
             <button className="tab">Breakfast Classics</button>
             <button className="tab">Noodles & Wok</button>
             <button className="tab">Hidden Gems</button>
          </div>

          <div className="blog-grid">
            {articles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="glass-container">
        <p>&copy; 2026 Rasa Malaysia. Built for the DEV.to Frontend Challenge - Comfort Food Edition.</p>
      </footer>
    </div>
  );
}
