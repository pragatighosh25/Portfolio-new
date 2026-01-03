import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HoverPreview({ image }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX + 32,
        y: e.clientY - 120,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: pos.x,
            y: pos.y,
          }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 z-50 pointer-events-none"
        >
          <img
            src={image}
            alt=""
            className="w-72 h-44 object-cover rounded-xl 
                       grayscale contrast-125 brightness-90"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}


