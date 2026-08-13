'use client';
import { useState, useEffect } from 'react';
import Carousel from '@/components/Carousel';

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
          <a href="#featured" className="btn">Discover the Flavors</a>
        </div>
      </header>

      <main>
        <section id="featured" className="featured-section">
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>Iconic Comfort Foods</h2>
          <Carousel />
        </section>
      </main>

      <footer className="glass-container">
        <p>&copy; 2026 Rasa Malaysia. Built for the DEV.to Frontend Challenge - Comfort Food Edition.</p>
      </footer>
    </>
  );
}
