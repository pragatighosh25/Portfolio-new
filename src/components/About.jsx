import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
          About
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl leading-[1.1] font-medium">
          I focus on building full-stack products that feel
          <span className="block text-white/40">
            intentional, human, and quietly powerful.
          </span>
        </h2>

        {/* Body copy */}
        <p className="mt-8 text-lg text-white/60 max-w-2xl">
          I’m a full stack developer crafting thoughtful interfaces and scalable
          backends — where usability, motion, and performance work together.
        </p>
      </motion.div>
    </section>
  );
}
