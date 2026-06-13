import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";

export default function SmoothScrollLayout({ children }) {
  const getLenisState = () => {
    if (typeof window === "undefined") return false;

    // PRO RULE: disable Lenis on tablets (portrait + landscape)
    const isTablet = window.matchMedia(
      "(min-width: 768px) and (max-width: 1366px)",
    ).matches;

    return !isTablet;
  };

  const [isLenisEnabled, setIsLenisEnabled] = useState(getLenisState);

  useEffect(() => {
    const onResize = () => {
      setIsLenisEnabled(getLenisState());
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!isLenisEnabled) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId;
    let isMounted = true;

    const raf = (time) => {
      if (!isMounted) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      isMounted = false;
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isLenisEnabled]);

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
