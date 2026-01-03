import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offset = scrollYProgress.get() * 60;

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y + offset, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    render();
    return () => window.removeEventListener("resize", resize);
  }, [scrollYProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
}
