import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 md:px-20 flex items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-6">
          Contact
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
          Have an idea, a project,
          <br />
          or just want to talk?
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-lg text-white/60 max-w-2xl">
          I’m always open to meaningful conversations, collaborations,
          or opportunities where thoughtful design and clean engineering matter.
        </p>

        {/* Primary CTA */}
        <div className="mt-12">
          <a
            href="mailto:pragati25ghosh@gmail.com"
            className="inline-block text-lg group uppercase tracking-widest"
          >
            Let’s talk
            <span className="block h-px w-0 bg-white transition-all duration-300 group-hover:w-full mt-2" />
          </a>
        </div>

        {/* Secondary links */}
        <div className="mt-16 flex flex-col sm:flex-row gap-8 text-sm uppercase tracking-widest text-white/60">
          <a
  href="https://github.com/pragatighosh25"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest
             text-white/60 hover:text-white transition cursor-hover"
>
  GitHub
  <span className="relative block w-6 h-px bg-white/50 transition-all duration-300 group-hover:w-10 group-hover:bg-white" />
</a>


          <a
            href="https://www.linkedin.com/in/pragati-ghosh/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 hover:text-white transition"
          >
            LinkedIn
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

