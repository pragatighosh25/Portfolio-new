import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getLenis } from "../helpers/lenis.js";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = ({ scroll }) => {
      // show header after small scroll
      setVisible(scroll > 40);
      // shrink header after more scroll
      setShrink(scroll > 120);
    };

    const lenis = getLenis();
    if (lenis) {
      lenis.on("scroll", onScroll);
      return () => lenis.off("scroll", onScroll);
    }
  }, []);

  const handleScroll = (target) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-999
        ${shrink ? "py-4" : "py-6"}
        px-6 md:px-20
        flex items-center justify-between
        bg-black/70 backdrop-blur
        transition-all duration-300
        pointer-events-none`}
    >
      {/* LOGO */}
      <div
        onClick={() => handleScroll("#top")}
        className={`pointer-events-auto cursor-pointer text-white font-semibold tracking-wide
          ${shrink ? "text-base" : "text-lg"}
          transition-all duration-300`}
      >
        Pragati Ghosh
      </div>

      {/* NAV */}
      <nav className="flex gap-8 text-xs uppercase tracking-widest text-white/70 pointer-events-auto">
        <button
          onClick={() => handleScroll("#work")}
          className="hover:text-white transition"
        >
          Work
        </button>
        <button
          onClick={() => handleScroll("#contact")}
          className="hover:text-white transition"
        >
          Contact
        </button>
      </nav>
    </motion.header>
  );
}
