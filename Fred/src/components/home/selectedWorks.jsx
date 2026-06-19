import React from "react";
import { motion } from "framer-motion";
import Sisters from "../../assets/works/Sisters - Photo/Sisters1.jpg";
import Caputo from "../../assets/works/Caputo - Photo/Caputo1.jpg";
import Blackline from "../../assets/works/Blackline - Photo/Blackline1.jpg";
import Hermes from "../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import Offset from "../../assets/works/Offset '25 - Photo/Offset2.1.jpg";
import Adidas from "../../assets/works/Adidas Climacool - Photo/Climacool-Design1.jpg";

import { itemVariants } from "../../animations/variants/works/itemVariants";
import { staggerParent } from "../../animations/variants/works/staggerParent";
import { childVariants } from "../../animations/variants/works/childVariants";
import { imageVariants } from "../../animations/variants/works/imageVariants";

function SelectedWorks() {
  const viewport = { once: true, margin: "-70px 0px -10px 0px" };

  return (
    <>
      <div className="works-container">
        <motion.div
          className="selected-works"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>SELECTED WORKS</p>
          <p>{"(22-26)"}</p>
        </motion.div>

        <hr />

        <div className="work-list">
          <div className="work-cards">
            <motion.div
              className="work-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="work-title">
                <motion.p
                  className="number"
                  variants={childVariants}
                  whileInView="visible"
                  viewport={viewport}
                >
                  <span className="number">01</span>
                </motion.p>
                <motion.p
                  variants={childVariants}
                  whileInView="visible"
                  viewport={viewport}
                >
                  SISTERS BEAUTY LOUNGE X L'OREAL
                </motion.p>
              </div>

              <motion.div
                className="work-preview-content"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="work-preview-content-inner">
                  <motion.div
                    className="work-preview-content-description"
                    variants={staggerParent}
                  >
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>PRODUCTION</motion.p>
                    <motion.p variants={childVariants}>EDITING</motion.p>
                    <motion.p variants={childVariants}>MODEL SHOOT</motion.p>
                  </motion.div>

                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Sisters}
                      alt="Sisters Work Preview"
                      className="sisters-image"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2026
              </motion.p>
            </motion.div>
          </div>

          <hr />

          <div className="work-cards">
            <motion.div
              className="work-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="work-title">
                <motion.p variants={childVariants}>
                  <span className="number">02</span>
                </motion.p>
                <motion.p variants={childVariants}>
                  CAPUTO FLOUR X CASINNETO
                </motion.p>
              </div>

              <motion.div
                className="work-preview-content"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="work-preview-content-inner">
                  <motion.div
                    className="work-preview-content-description"
                    variants={staggerParent}
                  >
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>VIDEOGRAPHY</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Caputo}
                      alt="Caputo Work Preview"
                      className="caputo-image"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2026
              </motion.p>
            </motion.div>
          </div>

          <hr />

          <div className="work-cards">
            <motion.div
              className="work-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="work-title">
                <motion.p variants={childVariants}>
                  <span className="number">03</span>
                </motion.p>
                <motion.p variants={childVariants}>HERMES</motion.p>
              </div>

              <motion.div
                className="work-preview-content"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="work-preview-content-inner">
                  <motion.div
                    className="work-preview-content-description"
                    variants={staggerParent}
                  >
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>VIDEOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>EDITING</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Hermes}
                      alt="Hermes Work Preview"
                      className="hermes-image"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2025
              </motion.p>
            </motion.div>
          </div>

          <hr />

          <div className="work-cards">
            <motion.div
              className="work-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="work-title">
                <motion.p variants={childVariants}>
                  <span className="number">04</span>
                </motion.p>
                <motion.p variants={childVariants}>
                  BLACKLINE MOTOR COMPANY
                </motion.p>
              </div>

              <motion.div
                className="work-preview-content"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="work-preview-content-inner">
                  <motion.div
                    className="work-preview-content-description"
                    variants={staggerParent}
                  >
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>VIDEOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>PRODUCTION</motion.p>
                    <motion.p variants={childVariants}>EDITING</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Blackline}
                      alt="Blackline Work Preview"
                      className="blackline-image"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2025
              </motion.p>
            </motion.div>
          </div>

          <hr />

          <div className="work-cards">
            <motion.div
              className="work-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="work-title">
                <motion.p variants={childVariants}>
                  <span className="number">05</span>
                </motion.p>
                <motion.p variants={childVariants}>OFFSET</motion.p>
              </div>

              <motion.div
                className="work-preview-content"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="work-preview-content-inner">
                  <motion.div
                    className="work-preview-content-description"
                    variants={staggerParent}
                  >
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>COMPOSITION</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Offset}
                      alt="Offset Work Preview"
                      className="offset-image"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2025
              </motion.p>
            </motion.div>
          </div>

          <hr />

          <div className="work-cards">
            <motion.div
              className="work-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="work-title">
                <motion.p variants={childVariants}>
                  <span className="number">06</span>
                </motion.p>
                <motion.p variants={childVariants}>
                  ADIDAS CLIMACOOL SPEC AD
                </motion.p>
              </div>

              <motion.div
                className="work-preview-content"
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                <div className="work-preview-content-inner">
                  <motion.div
                    className="work-preview-content-description"
                    variants={staggerParent}
                  >
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>PRODUCT SHOOT</motion.p>
                    <motion.p variants={childVariants}>SPEC AD</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Adidas}
                      alt="Adidas Work Preview"
                      className="adidas-image"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2024
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectedWorks;
