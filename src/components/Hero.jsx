import { motion } from "framer-motion";

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8 lg:px-20 bg-black text-white">
      {/* Intro Text */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl lg:text-7xl font-extrabold leading-tight"
      >
        I build minimalist
        <br /> experiences that feel alive.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-4 text-xl lg:text-2xl font-light max-w-xl"
      >
        Frontend Developer • React, Tailwind, Framer Motion • UI/UX-Driven
      </motion.p>

      {/* Ctas */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="#work"
          className="relative inline-flex items-center px-6 py-3 border border-white font-semibold overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            View Work
          </span>

          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </a>
        <a
          href="/pragati_resume.pdf"
          className="relative inline-flex items-center px-6 py-3 border border-white font-semibold overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Download CV
          </span>

          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </a>
        
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[2px] h-10 bg-white"></div>
      </motion.div>
    </section>
  );
}
