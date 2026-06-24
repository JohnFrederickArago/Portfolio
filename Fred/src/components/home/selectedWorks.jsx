import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/works/sisters" className="work-cards">
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
                  '26 SUMMER HAIR COLLECTION
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
                    <motion.p variants={childVariants}>
                      MODEL PHOTOGRAPHY
                    </motion.p>
                    <motion.p variants={childVariants}>
                      VIDEO PRODUCTION
                    </motion.p>
                    <motion.p variants={childVariants}>
                      LIGHTING DIRECTION
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Sisters}
                      alt="Sisters Work Preview"
                      className="sisters-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2026
              </motion.p>
            </motion.div>
          </NavLink>

          <hr />

          <NavLink to="/works/caputo" className="work-cards">
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
                  EVENT HIGHLIGHT COLLECTION
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
                    <motion.p variants={childVariants}>EVENT COVERAGE</motion.p>{" "}
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
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2026
              </motion.p>
            </motion.div>
          </NavLink>

          <hr />

          <NavLink to="/works/hermes" className="work-cards">
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
                <motion.p variants={childVariants}>
                  MARINE LIFESTYLE SHOOT
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
                    <motion.p variants={childVariants}>
                      BRAND PHOTOGRAPHY
                    </motion.p>
                    <motion.p variants={childVariants}>
                      VIDEO PRODUCTION
                    </motion.p>
                    <motion.p variants={childVariants}>CONTENT</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Hermes}
                      alt="Hermes Work Preview"
                      className="hermes-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2025
              </motion.p>
            </motion.div>
          </NavLink>

          <hr />

          <NavLink to="/works/blackline" className="work-cards">
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
                  AUTOMOTIVE STUDIO VISUALS
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
                    <motion.p variants={childVariants}>VIDEOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>PHOTOGRAPHY</motion.p>
                    <motion.p variants={childVariants}>
                      POST PRODUCTION
                    </motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Blackline}
                      alt="Blackline Work Preview"
                      className="blackline-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2025
              </motion.p>
            </motion.div>
          </NavLink>

          <hr />

          <NavLink to="/works/offset" className="work-cards">
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
                <motion.p variants={childVariants}>
                  '25 CAR CULTURE EXHIBITION
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
                    <motion.p variants={childVariants}>
                      VISUAL STORYTELLING
                    </motion.p>
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
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2025
              </motion.p>
            </motion.div>
          </NavLink>

          <hr />

          <NavLink to="/works/adidas" className="work-cards">
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
                  CREATIVE AD CONCEPT
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
                    <motion.p variants={childVariants}>GRAPHIC DESIGN</motion.p>
                    <motion.p variants={childVariants}>BRAND CAMPAIGN</motion.p>
                    <motion.p variants={childVariants}>PRODUCT SHOOT</motion.p>
                    <motion.p variants={childVariants}>ART DIRECTION</motion.p>
                  </motion.div>
                  <motion.div
                    className="work-preview-content-image"
                    variants={imageVariants}
                  >
                    <img
                      src={Adidas}
                      alt="Adidas Work Preview"
                      className="adidas-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.p className="year-created" variants={childVariants}>
                2024
              </motion.p>
            </motion.div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SelectedWorks;
