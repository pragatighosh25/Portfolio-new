import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
          Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-medium leading-tight max-w-3xl">
          Have an idea, a project,
          <br /> or just want to talk design?
        </h2>

        <a
          href="mailto:yourmail@gmail.com"
          className="inline-block mt-10 text-lg group"
        >
          Let’s talk
          <span className="block h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full mt-2" />
        </a>
      </motion.div>
    </section>
  );
}
