'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import SubscribeModal from '@/components/SubscribeModal';

export default function Home() {
  const heroImages = [
    '/images/nasi-lemak.jpg',
    '/images/Curry-mee.jpg',
    '/images/Sang-Har-Mee.jpg',
    '/images/bah-kut-teh-and-Black-Vinegar-Pork-Trotter.jpg'
  ];
  
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <header 
        className="hero" 
        id="home"
        style={{ backgroundImage: `url('${heroImages[currentBg]}')` }}
      >

        <div className="hero-content glass-container">
          <h1 style={{ fontFamily: 'var(--font-heading)' }}>The Soul of Malaysia</h1>
          <p>Experience the ultimate comfort food. A harmonious blend of Malay, Chinese, and Indian flavors that warms the heart and soul.</p>
          <div className="hero-btn-group">
            <a href="#featured" className="btn">Discover the Flavors</a>
            <Link href="/anything-lah" className="btn btn-secondary">
              🎯 &quot;Anything Lah!&quot; Decider (AI)
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section id="featured" className="featured-section">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>Iconic Comfort Foods</h2>
          <Carousel />
        </section>

        {/* Hacktoberfest Feature Callout: Anything Lah! */}
        <section className="featured-section" style={{ paddingTop: '0' }}>
          <div className="glass-container anything-lah-callout">
            <div className="callout-content">
              <span className="badge-tag">HACKTOBERFEST 2026: BUILD FOR A FRIEND</span>
              <h2 style={{ fontFamily: 'var(--font-heading)', marginTop: '10px' }}>
                Friend Says &quot;Anything Lah&quot; Again?
              </h2>
              <p>
                Put an end to 30-minute lunch arguments. Powered by in-browser open-weight transformers (<code>Xenova/all-MiniLM-L6-v2</code>), our AI analyzes their unarticulated cravings, transit laziness, and budget to hand down an uncompromising food verdict.
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link href="/anything-lah" className="btn">
                  🎯 Try &quot;Anything Lah!&quot; Destroyer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Callout Section */}
        <section className="subscribe-section">
          <div className="subscribe-card glass-container">
            <div className="subscribe-text">
              <h3 style={{ fontFamily: 'var(--font-heading)' }}>Craving New Makan Spots?</h3>
              <p>Subscribe to receive our latest curated guides on hidden, transit-friendly food gems across Malaysia.</p>
            </div>
            <SubscribeModal 
              buttonClassName="btn subscribe-card-btn" 
              buttonLabel="🔔 Subscribe Now" 
            />
          </div>
        </section>
      </main>

      <footer className="glass-container">
        <p>&copy; 2026 Rasa Malaysia. Built for the DEV.to Frontend Challenge - Comfort Food Edition.</p>
      </footer>
    </>
  );
}
