import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Activity {
  icon: ReactNode;
  label: string;
}

const Icon = ({ d }: { d: string }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
    <path d={d} />
  </svg>
);

const activities: Activity[] = [
  {
    icon: <Icon d="M22 6c-2-2-6-2-8 0L12 8l-2-2C8 4 4 4 2 6s-2 6 0 8l10 10 10-10c2-2 2-6 0-8zM7 12h4m6 0h-4m0-4v8" />,
    label: 'Horseback Riding',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <path d="M2 18c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
      <path d="M2 14c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
      <path d="M2 10c2-2 4-3 6-3s4 1 6 3 4 3 6 3" />
    </svg>,
    label: 'River Access',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <path d="M12 22V8" />
      <path d="M5 12l7-4 7 4" />
      <path d="M7 16l5-3 5 3" />
      <path d="M9 20l3-2 3 2" />
      <circle cx="12" cy="5" r="2" />
    </svg>,
    label: 'Nature Trails',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
      <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
    </svg>,
    label: 'Live Entertainment',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <path d="M4 18l4-12h8l4 12" />
      <path d="M2 18h20" />
      <path d="M7 14h10" />
    </svg>,
    label: 'Kayaking & Canoes',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42" />
    </svg>,
    label: 'Sunrise Yoga',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <path d="M12 22c-2-4-6-7-6-11a6 6 0 0 1 12 0c0 4-4 7-6 11z" />
      <path d="M9.5 9a2.5 2.5 0 0 1 5 0" />
    </svg>,
    label: 'Campfire Nights',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>,
    label: 'Open Mic Events',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Experiences() {
  return (
    <section
      id="activities"
      className="relative py-20 md:py-28 noise-overlay overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1C3A2A 0%, #2a503a 40%, #1C3A2A 70%, #162e22 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-cream text-4xl md:text-5xl mb-4">
            Life on the Suwannee
          </h2>
          <p className="font-body text-sage text-lg max-w-xl mx-auto">
            There's always something waiting just beyond your campsite
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.label}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
              <div className="mb-3">{activity.icon}</div>
              <span className="font-body text-cream text-sm font-bold tracking-wide">
                {activity.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
