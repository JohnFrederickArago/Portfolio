import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../assets/image/Logo-Black.png";
import Logo2 from "../assets/image/Logo-White.png";

import { staggerParent } from "../animations/variants/works/staggerParent";
import { childVariants } from "../animations/variants/works/childVariants";

function Header() {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bhamMenu = document.querySelector(".b-ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    if (!bhamMenu || !offScreenMenu) return;

    const onHamburgerClick = () => {
      const isActive = offScreenMenu.classList.toggle("active");
      bhamMenu.classList.toggle("active", isActive);
      setIsMenuOpen(isActive);
    };

    const onHamburgerKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onHamburgerClick();
      }
    };

    bhamMenu.addEventListener("click", onHamburgerClick);
    bhamMenu.addEventListener("keydown", onHamburgerKeyDown);

    return () => {
      bhamMenu.removeEventListener("click", onHamburgerClick);
      bhamMenu.removeEventListener("keydown", onHamburgerKeyDown);
    };
  }, []);

  const viewport = { once: true, margin: "-70px 0px -10px 0px" };
  const viewport2 = { once: false, margin: "-70px 0px -10px 0px" };

  return (
    <>
      <header className="b-header">
        <motion.nav
          className="b-navbar"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="b-logo">
            <NavLink to="/">
              <motion.img src={Logo} alt="Logo" variants={childVariants} />
            </NavLink>
          </div>
          <div className="b-timePlace">
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
          <motion.div className="b-role" variants={childVariants}>
            {"(Multimedia Designer)"}
          </motion.div>
          <ul className="b-nav-links">
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
          <div className="b-placeholder"></div>
        </motion.nav>

        <motion.div
          className="off-screen-menu"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={viewport2}
        >
          <div></div>

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
        </motion.div>

        <nav>
          <div className="b-logo-menu">
            <NavLink to="/">
              <img
                src={isMenuOpen ? Logo2 : Logo}
                alt="Logo"
                className={isMenuOpen ? "white-logo" : "black-logo"}
              />
            </NavLink>
          </div>
          <div
            className="b-ham-menu"
            aria-label="Open menu"
            role="button"
            tabIndex={0}
          >
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
