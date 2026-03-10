import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Stat {
  icon: ReactNode;
  value: string;
  label: string;
}

const TreeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
    <path d="M12 3L4 14h5v7h6v-7h5L12 3z" />
  </svg>
);

const MusicIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const TentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 2v20" />
    <path d="M8.5 22l3.5-7 3.5 7" />
  </svg>
);

const RingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage">
    <path d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" />
    <path d="M12 2v2.5" />
    <path d="M9.5 2h5l-1 2.5h-3L9.5 2z" />
  </svg>
);

const stats: Stat[] = [
  { icon: <TreeIcon />, value: '800 Acres', label: 'Old-Growth Forest' },
  { icon: <MusicIcon />, value: '50+ Years', label: 'Of Live Music' },
  { icon: <TentIcon />, value: 'Year-Round', label: 'Camping & Cabins' },
  { icon: <RingIcon />, value: 'Private Events', label: 'Weddings & Gatherings' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function StatsBar() {
  return (
    <section className="bg-forest noise-overlay">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.value}
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-3">{stat.icon}</div>
            <span className="font-display text-cream text-2xl md:text-3xl">{stat.value}</span>
            <span className="font-body text-sage text-sm tracking-wide mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
