import React from "react";
import { motion } from "framer-motion";
import ParagraphReveal from "../../animations/components/ParagraphReveal";
import PerLetterReveal from "../../animations/components/PerLetterReveal";
import { staggerParent } from "../../animations/variants/works/staggerParent";
import { childVariants } from "../../animations/variants/works/childVariants";

function Services() {
  const descriptionLines = [
    "Blending creativity, strategy and",
    "innovation to craft intuitive digital",
    "experiences from concept to execution.",
  ];

  const viewport = { once: false, margin: "-70px 0px -10px 0px" };

  return (
    <div className="services-container" data-reveal>
      <div className="services-contents">
        <div className="left-container">
          <motion.div
            className="services-title"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.p className="services-title" variants={childVariants}>
              SERVICES
            </motion.p>
          </motion.div>

          <ParagraphReveal className="services-description">
            <PerLetterReveal
              lines={descriptionLines}
              className="services-letter"
            />
          </ParagraphReveal>
        </div>

        <motion.div
          className="right-container"
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={staggerParent}
        >
          <motion.p variants={childVariants}>Video Production</motion.p>
          <motion.p variants={childVariants}>Photography</motion.p>
          <motion.p variants={childVariants}>Graphic Design</motion.p>
          <motion.p variants={childVariants}>Content Creation</motion.p>
        </motion.div>

        <div className="placeholder2"></div>
      </div>
    </div>
  );
}

export default Services;
