import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
          About
        </p>

        <h2 className="text-4xl md:text-6xl leading-tight font-medium">
          I focus on building interfaces that feel intentional,
          human, and quietly powerful.
        </h2>

        <p className="mt-8 text-lg text-white/60 max-w-2xl">
          I’m a frontend developer who blends clean engineering with
          strong visual thinking. My work lives at the intersection of
          usability, motion, and restraint.
        </p>
      </motion.div>
    </section>
  );
}
