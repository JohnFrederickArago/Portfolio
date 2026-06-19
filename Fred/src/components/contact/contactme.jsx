import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Client_Alert",
        "template_duq5coc",
        form.current,
        "CjO2oy7LM05Z8cqmf",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <>
      <div className="form-container">
        <p className="contact-title">Let's Work Together</p>

        <div className="form-left-right">
          <div className="form-left">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="form-right">
            <p className="contact-description">
              Have a project, collaboration, or opportunity in mind? Feel free
              to reach out and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="connected">
          <div className="stay">
            <p className="gray">STAY IN TOUCH</p>
          </div>

          <div className="socials">
            <p className="gray">SOCIALS</p>
            <p>Instagram</p>
            <p>BeHance</p>
            <p>LinkedIn</p>
          </div>

          <div className="contact-us">
            <p className="gray">GET IN TOUCH</p>
            <p>frederickarago30@gmail.com</p>
            <p>+971 50 278 2145</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
