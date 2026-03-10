import { motion } from 'framer-motion';

export default function EventsSection() {
  return (
    <section id="events" className="noise-overlay">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900"
            alt="Energetic music festival crowd with vibrant stage lights"
            loading="lazy"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-forest flex items-center"
        >
          <div className="px-8 md:px-16 py-16 md:py-20">
            <span className="font-accent text-amber tracking-[0.3em] text-sm">
              EVENTS & FESTIVALS
            </span>
            <h2 className="font-display text-cream text-4xl md:text-5xl mt-4 mb-6">
              Music Has Always Lived Here
            </h2>
            <p className="font-body text-cream/80 text-base leading-relaxed mb-8 max-w-lg">
              From intimate acoustic sets to full-scale music festivals, the Spirit of the Suwannee
              has been Florida's premier live music destination for over half a century. Discover
              upcoming events and secure your spot.
            </p>
            <a
              href="#"
              className="inline-block bg-amber text-bark font-body font-bold px-8 py-4 rounded-sm tracking-wide hover:bg-amber/90 transition-colors uppercase text-sm"
            >
              View All Events &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
