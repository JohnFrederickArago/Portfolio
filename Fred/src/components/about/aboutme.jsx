import React from "react";
import Hero from "../../assets/image/Hero2.jpg";

function AboutMe() {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <p>
            Created visual content for fashion, beauty, and lifestyle brands.
          </p>
        </div>

        <img src={Hero} alt="Hero Image" />

        <div className="about-contents-container">
          <div className="about-who">
            <p className="gray">WHO I AM</p>
            <p className="right-about-p">
              Creative & dedicated multimedia designer with a strong portfolio
              of innovative visual solutions. <br /> <br /> Eager to contribute
              design expertise and aesthetic vision to a forward-thinking
              organization.
            </p>
          </div>

          <hr />

          <div className="about-services">
            <p className="gray">SERVICES</p>
            <div className="right-about">
              <p>Video Production</p>
              <p>Photography</p>
              <p>Graphic Design</p>
              <p>Content Creation</p>
            </div>
          </div>

          <hr />

          <div className="about-clients">
            <p className="gray">CLIENTS</p>
            <div className="right-about">
              <p>
                Recognized for creative direction and high-quality visual
                content across branding, fashion, and lifestyle projects.
              </p>
            </div>
          </div>

          <div className="clients-table">
            <div className="clients-list">
              <p className="clients">CAPUTO FLOUR</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2026</p>
            </div>

            <hr className="line2" />

            <div className="clients-list">
              <p className="clients">L'OREAL X SISTERS BEAUTY LOUNGE</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2026</p>
            </div>

            <hr className="line2" />

            <div className="clients-list">
              <p className="clients">ATW FOR AVIATION TRAINING SERVICES</p>
              <p className="did-what">MARKETING INTERN (FULL-TIME)</p>
              <p className="client-year">2025</p>
            </div>

            <hr className="line2" />

            <div className="clients-list">
              <p className="clients">ROSMETIC MEDICAL CENTER</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2025</p>
            </div>

            <hr className="line2" />

            <div className="clients-list">
              <p className="clients">INTERPRET MEDIA</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2024-2025</p>
            </div>

            <hr className="line2" />

            <div className="clients-list">
              <p className="clients">FIREFLIES AGENCY</p>
              <p className="did-what">CONTENT CREATOR (PART-TIME)</p>
              <p className="client-year">2022-2023</p>
            </div>

            <hr className="line2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
