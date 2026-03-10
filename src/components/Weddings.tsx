import { motion } from 'framer-motion';

export default function Weddings() {
  return (
    <section id="weddings" className="relative min-h-[600px] flex items-center noise-overlay">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600"
        alt="Beautiful outdoor wedding ceremony in a natural forest setting"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-bark/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center"
      >
        <span className="font-accent text-amber tracking-[0.3em] text-sm">
          WEDDINGS & PRIVATE EVENTS
        </span>
        <h2 className="font-display text-cream text-4xl md:text-6xl mt-4 mb-6">
          Say Yes in the Forest
        </h2>
        <p className="font-body text-cream/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          800 acres of natural beauty, Spanish moss canopies, and riverside ceremony sites.
          The Spirit of the Suwannee is unlike any wedding venue you've ever seen.
        </p>
        <a
          href="#"
          className="inline-block border-2 border-cream/60 text-cream font-body font-bold px-8 py-4 rounded-sm tracking-wide hover:border-cream hover:bg-cream/10 transition-all uppercase text-sm"
        >
          Start Planning Your Event
        </a>
      </motion.div>
    </section>
  );
}
