'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="glass-container navbar" aria-label="Main Navigation">
      <div className="logo" style={{ fontFamily: 'var(--font-heading)' }}>
        <Link href="/">Rasa Malaysia</Link>
      </div>
      <div className="nav-links">
        <Link href="/#about">About</Link>
        <Link href="/#featured">Dishes</Link>
        <Link href="/blog">Blog</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
