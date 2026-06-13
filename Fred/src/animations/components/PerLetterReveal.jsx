import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { perLetterReveal } from "../variants/perLetterReveal";

function PerLetterReveal({ lines, className }) {
  const renderedLines = useMemo(() => {
    return lines.map((line, lineIndex) => {
      const chars = line.split("");
      return (
        <React.Fragment key={lineIndex}>
          {chars.map((char, charIndex) => (
            <motion.span
              key={`${lineIndex}-${charIndex}`}
              variants={perLetterReveal}
              className={className}
            >
              {char}
            </motion.span>
          ))}
          <br />
        </React.Fragment>
      );
    });
  }, [lines, className]);

  return <motion.p>{renderedLines}</motion.p>;
}

export default React.memo(PerLetterReveal);
