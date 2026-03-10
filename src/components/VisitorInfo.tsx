import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfoItem {
  icon: ReactNode;
  text: string;
}

const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber shrink-0 mt-0.5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const info: InfoItem[] = [
  { icon: <MapPinIcon />, text: '3076 95th Drive, Live Oak, FL 32060' },
  { icon: <PhoneIcon />, text: '(386) 364-1683' },
  { icon: <GlobeIcon />, text: 'musicliveshere.com' },
  { icon: <CalendarIcon />, text: 'Open Year-Round' },
];

export default function VisitorInfo() {
  return (
    <section className="bg-cream py-20 md:py-28 noise-overlay">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-forest rounded-lg p-8 md:p-12 min-h-[350px] flex flex-col items-center justify-center"
          >
            {/* Decorative SVG dot map */}
            <svg viewBox="0 0 200 150" className="w-full max-w-xs opacity-30 mb-6">
              <circle cx="40" cy="30" r="3" fill="#8FAF8C" />
              <circle cx="80" cy="50" r="4" fill="#C8922A" />
              <circle cx="120" cy="25" r="2.5" fill="#8FAF8C" />
              <circle cx="160" cy="60" r="3" fill="#8FAF8C" />
              <circle cx="60" cy="80" r="3.5" fill="#8FAF8C" />
              <circle cx="100" cy="100" r="5" fill="#C8922A" />
              <circle cx="140" cy="85" r="2" fill="#8FAF8C" />
              <circle cx="30" cy="110" r="3" fill="#8FAF8C" />
              <circle cx="170" cy="120" r="3.5" fill="#8FAF8C" />
              <circle cx="90" cy="130" r="2.5" fill="#8FAF8C" />
              <path d="M40,30 Q60,55 80,50" stroke="#8FAF8C" strokeWidth="0.5" fill="none" opacity="0.5" />
              <path d="M80,50 Q100,75 100,100" stroke="#C8922A" strokeWidth="0.5" fill="none" opacity="0.5" />
              <path d="M120,25 Q140,55 160,60" stroke="#8FAF8C" strokeWidth="0.5" fill="none" opacity="0.5" />
              <path d="M60,80 Q80,90 100,100" stroke="#8FAF8C" strokeWidth="0.5" fill="none" opacity="0.5" />
            </svg>
            <span className="font-accent text-cream/60 tracking-[0.2em] text-sm text-center">
              PROPERTY MAP &mdash; 800 ACRES
            </span>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-forest text-4xl md:text-5xl mb-8">Plan Your Visit</h2>
            <ul className="space-y-5">
              {info.map((item) => (
                <li key={item.text} className="flex items-start gap-4">
                  {item.icon}
                  <span className="font-body text-bark text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
