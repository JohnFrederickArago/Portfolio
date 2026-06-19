import React from "react";
import Logo from "../../assets/image/Logo-Black.png";
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
        <img src={Logo} alt="Footer Logo" className="footer-logo" />
        <p variants={childVariants}>
          <a className="footer-email" href={gmailComposeUrl}>
            frederickarago30@gmail.com
          </a>
        </p>

        <p className="footer-text">© {new Date().getFullYear()}</p>
      </div>
    </>
  );
}

export default Footer;
