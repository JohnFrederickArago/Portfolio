import { Fragment, memo, useMemo } from "react";
import { m as motion } from "framer-motion";
import { perLetterReveal } from "../variants/perLetterReveal";

function PerLetterReveal({ lines, className }) {
  const renderedLines = useMemo(() => {
    return lines.map((line, lineIndex) => {
      const chars = line.split("");
      return (
        <Fragment key={lineIndex}>
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
        </Fragment>
      );
    });
  }, [lines, className]);

  return <motion.p>{renderedLines}</motion.p>;
}

export default memo(PerLetterReveal);
