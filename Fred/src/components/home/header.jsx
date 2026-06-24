import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { m as motion } from "framer-motion";

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

    const onHamburgerKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onHamburgerClick();
      }
    };

    hamMenu.addEventListener("click", onHamburgerClick);
    hamMenu.addEventListener("keydown", onHamburgerKeyDown);

    return () => {
      hamMenu.removeEventListener("click", onHamburgerClick);
      hamMenu.removeEventListener("keydown", onHamburgerKeyDown);
    };
  }, []);

  const viewport = { once: true, margin: "-70px 0px -10px 0px" };
  const viewport2 = { once: false, margin: "-70px 0px -10px 0px" };

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
            <NavLink to="/">
              <motion.img src={Logo} alt="Logo" variants={childVariants} />
            </NavLink>
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
          <div className="logo-menu">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <div
            className="ham-menu"
            aria-label="Open menu"
            role="button"
            tabIndex={0}
          >
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
              scale: 1.35,
              filter: "brightness(90%)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            fetchPriority="high"
            decoding="async"
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
