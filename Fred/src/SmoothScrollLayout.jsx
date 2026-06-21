import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useLenis } from "./LenisContext";

export default function SmoothScrollLayout({ children }) {
  const { setLenis } = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isTablet = window.matchMedia(
      "(min-width: 768px) and (max-width: 1366px)",
    ).matches;

    if (isTablet) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    setLenis(lenis);

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
