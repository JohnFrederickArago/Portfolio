import React from "react";
import Logo from "../../assets/image/Logo-Black.png";

import { NavLink } from "react-router-dom";
import { childVariants } from "../../animations/variants/works/childVariants";

function Footer() {
  const email = "frederickarago30@gmail.com";
  const subject = encodeURIComponent("Hello from your website!");
  const body = encodeURIComponent("Hi, I wanted to reach out regarding...");

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${subject}&body=${body}`;

  const viewport = { once: true };

  return (
    <>
      <div className="footer-container">
        <div className="top-footer">
          <div className="placeholder4"></div>

          <div className="placeholder5"></div>

          <div className="top-footer-text">
            <p>Open to new opportunities and creative collaborations.</p>
            <p variants={childVariants}>
              <a href={gmailComposeUrl}>frederickarago30@gmail.com</a>
            </p>
          </div>

          <div className="placeholder4"></div>
        </div>
        <div className="bottom-footer">
          <NavLink to="/" className="footer-logo-container">
            <img src={Logo} alt="Footer Logo" className="footer-logo" />
          </NavLink>

          <div className="placeholder5"></div>

          <div className="footer-email">
            <p variants={childVariants}>
              <a href={gmailComposeUrl}>frederickarago30@gmail.com</a>
            </p>
          </div>

          <div className="footer-text-container">
            <p className="footer-text">© {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
