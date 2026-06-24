import { m as motion } from "framer-motion";
import { paragraphReveal } from "../variants/paragraphReveal";

function ParagraphReveal({ children, className }) {
  return (
    <motion.div
      className={className}
      variants={paragraphReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default ParagraphReveal;
