import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function SmoothScrollLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Time taken to complete the scroll animation (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Physics easing curve
      orientation: "vertical", // 'vertical' or 'horizontal'
      gestureOrientation: "vertical",
      smoothWheel: true, // Targets and smooths out mouse wheels
      wheelMultiplier: 1, // Speeds up or slows down scroll sensitivity
    });

    let rafId = 0;
    let isMounted = true;

    const raf = (time) => {
      if (!isMounted) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      isMounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
