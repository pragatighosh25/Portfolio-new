import { motion, useScroll, useTransform } from "framer-motion";
import { getLenis } from "../helpers/lenis.js";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // subtle parallax effect for the main headline
  const yRange = useTransform(scrollYProgress, [0, 0.1], [0, -20]);

  return (
    <section id="top" className="min-h-screen bg-black text-white px-8 lg:px-20 flex flex-col justify-center relative overflow-hidden">
      {/* Headline group — subtle parallax and fade */}
      <motion.div
        style={{ y: yRange }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <motion.span
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  className="block mb-4 text-sm uppercase tracking-[0.3em] text-white/50"
>
  Pragati Ghosh
</motion.span>

        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
          I build minimalist
          <br />
          experiences that feel alive.
        </h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-xl lg:text-2xl font-light max-w-xl text-white/70"
      >
        Full Stack Developer • UI/UX-Driven

      </motion.p>

      {/* CTA Buttons — scale on hover, fade in */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 flex gap-6"
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            const lenis = getLenis();
            if (lenis) {
              lenis.scrollTo("#work");
            } else {
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-6 py-3 border border-white text-sm font-semibold uppercase tracking-wide
             transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-black"
        >
          View Work
        </a>

        <a
          href="/SWE_pragati_ghosh.pdf"
          target="_blank"
          className="px-6 py-3 border border-white text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out hover:scale-105 hover:bg-white hover:text-black"
        >
          Download CV
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-white/50" />
      </motion.div>
    </section>
  );
}
