import { motion } from 'framer-motion';

interface Accommodation {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const accommodations: Accommodation[] = [
  {
    title: 'Rustic Cabins',
    description: 'Tucked among the oaks with modern comforts. Wake up to birdsong and river mist.',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
    alt: 'Cozy rustic cabin nestled in the woods',
  },
  {
    title: 'RV & Full Hookup',
    description: 'Pull in and plug in. Full-service RV sites with shade, power, and water.',
    image: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800',
    alt: 'RV camping site surrounded by trees',
  },
  {
    title: 'Primitive Camping',
    description: 'Just you, your tent, and the stars. True backcountry camping on the Suwannee.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
    alt: 'Tent camping under the stars near the river',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Accommodations() {
  return (
    <section id="camping" className="bg-cream py-20 md:py-28 noise-overlay">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-forest text-4xl md:text-5xl">Find Your Perfect Stay</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {accommodations.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
              className="relative rounded-lg overflow-hidden h-96 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-cream text-2xl mb-2">{item.title}</h3>
                <p className="font-body text-cream/80 text-sm leading-relaxed mb-3">{item.description}</p>
                <span className="font-body text-amber text-sm font-bold tracking-wide hover:text-amber/80 transition-colors">
                  Reserve Now &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
