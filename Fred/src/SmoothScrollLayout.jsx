import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";

export default function SmoothScrollLayout({ children }) {
  const prefersReducedMotion = useReducedMotion();

  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Prevent double-init (React strict mode removed in main.jsx,
    // but this is a safe guard for future dev/prod differences).
    if (lenisRef.current) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      if (!lenisRef.current) return;

      lenisRef.current.raf(time);

      rafIdRef.current = requestAnimationFrame(raf);
    };

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
