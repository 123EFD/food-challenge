'use client';
import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="glass-container navbar" aria-label="Main Navigation">
      <div className="logo" style={{ fontFamily: 'var(--font-heading)' }}>
        <Link href="/" onClick={closeMenu}>Rasa Malaysia</Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-links desktop-nav">
        <Link href="/#home">Home</Link>
        <Link href="/#featured">Dishes</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/anything-lah" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Anything Lah! 🎯</Link>
        <ThemeToggle />
      </div>

      {/* Mobile Controls (Theme Toggle & Hamburger Button) */}
      <div className="mobile-controls">
        <ThemeToggle />
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu} 
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-nav-dropdown glass-container">
          <Link href="/#home" onClick={closeMenu}>Home</Link>
          <Link href="/#featured" onClick={closeMenu}>Dishes</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/anything-lah" onClick={closeMenu} style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Anything Lah! 🎯</Link>
        </div>
      )}
    </nav>
  );
}
