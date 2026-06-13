import React, { useState, useEffect } from "react";
import Logo from "../../assets/image/Logo-Black.png";
import { motion } from "framer-motion";
import { staggerParent } from "../../animations/variants/works/staggerParent";
import { childVariants } from "../../animations/variants/works/childVariants";

function Footer() {
  const email = "frederickarago30@gmail.com";
  const subject = encodeURIComponent("Hello from your website!");
  const body = encodeURIComponent("Hi, I wanted to reach out regarding...");

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${subject}&body=${body}`;

  const viewport = { once: true, margin: "-70px 0px -10px 0px" };

  return (
    <>
      <motion.div
        className="footer-container"
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerParent}
      >
        <img src={Logo} alt="Footer Logo" className="footer-logo" />
        <motion.p variants={childVariants}>
          <a className="footer-email" href={gmailComposeUrl}>
            frederickarago30@gmail.com
          </a>
        </motion.p>

        <motion.p className="footer-text" variants={childVariants}>
          © 2024
        </motion.p>
      </motion.div>
    </>
  );
}

export default Footer;
