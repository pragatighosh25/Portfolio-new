// components/CustomCursor.jsx
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-150 ${
        hovering ? "bg-white mix-blend-difference scale-125" : "bg-white/60"
      }`}
      style={{
        left: position.x + "px",
        top: position.y + "px",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
