export const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 10, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
