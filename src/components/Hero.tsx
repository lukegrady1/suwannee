import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navLinks = ['Camping', 'Events', 'Weddings', 'Activities'] as const;

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 250]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src="https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1800"
          alt="Outdoor music festival at night with crowd and atmospheric stage lights"
          className="w-full h-[130%] object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-cream text-xl md:text-2xl italic"
        >
          Spirit of the Suwannee
        </motion.div>

        {/* Desktop nav */}
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex gap-8 text-cream/90 font-body text-sm tracking-widest uppercase"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-amber transition-colors duration-300">
                {link}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-30 text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-bark/95 z-25 flex flex-col items-center justify-center gap-4 px-8"
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-amber transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-full max-w-xs text-center bg-forest/40 border border-cream/10 rounded-lg px-6 py-4 text-cream font-display text-2xl hover:bg-forest/60 hover:text-amber transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[calc(100%-80px)] text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-accent text-amber tracking-[0.3em] text-sm md:text-base mb-6"
        >
          LIVE OAK, FLORIDA &mdash; ON THE SUWANNEE RIVER
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-cream text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-tight"
        >
          Where the River Meets the Music
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
        >
          800 acres of old-growth forest. World-class music festivals. Your next great escape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#camping"
            className="bg-amber text-bark font-body font-bold px-8 py-4 rounded-sm tracking-wide hover:bg-amber/90 transition-colors uppercase text-sm"
          >
            Book Your Stay
          </a>
          <a
            href="#activities"
            className="border-2 border-cream/60 text-cream font-body font-bold px-8 py-4 rounded-sm tracking-wide hover:border-cream hover:bg-cream/10 transition-all uppercase text-sm"
          >
            Explore the Park
          </a>
        </motion.div>
      </div>
    </section>
  );
}
