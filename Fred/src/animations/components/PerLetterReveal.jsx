import React from "react";
import { motion } from "framer-motion";
import { perLetterReveal } from "../variants/perLetterReveal";

function PerLetterReveal({ lines, className }) {
  return (
    <motion.p>
      {lines.map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line.split("").map((char, charIndex) => (
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
      ))}
    </motion.p>
  );
}

export default PerLetterReveal;
