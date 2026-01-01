import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function HoverPreview({ image, active }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX + 30,
        y: e.clientY - 120,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!active || !image) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: pos.x,
        y: pos.y,
      }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.35 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999999,
        pointerEvents: "none",
      }}
      className="w-64 h-40 overflow-hidden"
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover grayscale"
      />
    </motion.div>,
    document.body
  );
}
