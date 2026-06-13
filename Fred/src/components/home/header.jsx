import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../../assets/image/Logo-White.png";
import Hero from "../../assets/image/Landing-Page.jpg";

import { staggerParent } from "../../animations/variants/works/staggerParent";
import { childVariants } from "../../animations/variants/works/childVariants";

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    if (!hamMenu || !offScreenMenu) return;

    const onHamburgerClick = () => {
      const isActive = offScreenMenu.classList.toggle("active");
      hamMenu.classList.toggle("active", isActive);
    };

    hamMenu.addEventListener("click", onHamburgerClick);

    return () => {
      hamMenu.removeEventListener("click", onHamburgerClick);
    };
  }, []);

  const viewport = { once: false, margin: "-70px 0px -10px 0px" };

  return (
    <>
      <header className="header">
        <motion.nav
          className="navbar"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="logo">
            <motion.img src={Logo} alt="Logo" variants={childVariants} />
          </div>
          <div className="timePlace">
            <motion.p variants={childVariants}>
              {time.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Dubai",
              })}
            </motion.p>
            <motion.p variants={childVariants}>
              Dubai, United Arab Emirates
            </motion.p>
          </div>
          <motion.div className="role" variants={childVariants}>
            {"(Multimedia Designer)"}
          </motion.div>
          <ul className="nav-links">
            <motion.li variants={childVariants}>
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li variants={childVariants}>
              <NavLink to="/works">Works</NavLink>
            </motion.li>
            <motion.li variants={childVariants}>
              <NavLink to="/about">About</NavLink>
            </motion.li>
            <motion.li variants={childVariants}>
              <NavLink to="/contact">Contact</NavLink>
            </motion.li>
          </ul>
          <div className="placeholder"></div>
        </motion.nav>

        <div className="off-screen-menu">
          <div></div>

          <ul className="nav-links">
            <li>Home</li>
            <li>Works</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="timePlace">
            <p>
              {time.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
                timeZone: "Asia/Dubai",
              })}
            </p>
            <p>Dubai, United Arab Emirates</p>
          </div>
          <div className="role">{"(Multimedia Designer)"}</div>
        </div>

        <nav>
          <div className="logo-menu">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="ham-menu">
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className="hero">
          <motion.img
            src={Hero}
            alt="Hero Image"
            initial={{ scale: 6.35, filter: "brightness(50%)" }}
            animate={{
              scale: 1.55,
              filter: "brightness(70%)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <div className="hero-text">
            <span>FRED ARAGO</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
