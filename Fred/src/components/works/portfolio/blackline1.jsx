import React, { useState, useEffect } from "react";

import Hero from "../../../assets/works/Blackline - Photo/Blackline1.jpg";
import BlacklineImage1 from "../../../assets/works/Blackline - Photo/Blackline2.jpg";
import BlacklineImage2 from "../../../assets/works/Blackline - Photo/Blackline3.jpg";
import BlacklineImage3 from "../../../assets/works/Blackline - Photo/Blackline4.jpg";
import BlacklineImage4 from "../../../assets/works/Blackline - Photo/Blackline5.jpg";
import BlacklineImage5 from "../../../assets/works/Blackline - Photo/Blackline6.jpg";
import BlacklineImage6 from "../../../assets/works/Blackline - Photo/Blackline7.jpg";

import BlacklineVideo from "../../../assets/works/Blackline - Video/BlacklineVideo.mp4";

function Blackline1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>AUTOMOTIVE STUDIO VISUALS</p>
        </div>
        <div className="header-hero-img">
          <img
            src={Hero}
            alt="Blackline Hero Image"
            className="blackline-image"
          />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Created automotive visual content for Blackline Motor Company,
              capturing a featured vehicle in a controlled garage environment.
              Focused on cinematic lighting, detail-driven composition, and a
              cohesive visual style to highlight the car’s design, texture, and
              presence for brand and promotional use.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Blackline Motor Company</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Videography</p>
                <p>Photography</p>
                <p>Post Production</p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-works">
          <img src={BlacklineImage3} alt="Blackline Work 3" />
          <img src={BlacklineImage4} alt="Blackline Work 4" />
          <img src={BlacklineImage1} alt="Blackline Work 1" />
          <img src={BlacklineImage5} alt="Blackline Work 5" />
        </div>

        {/* VIDEO THUMBNAIL */}
        <div className="video-thumb" onClick={() => setIsOpen(true)}>
          <video src={BlacklineVideo} muted />
          <div className="play-button">▶</div>
        </div>

        <div className="landscape-img">
          <img src={BlacklineImage6} alt="Blackline Work 6" />
        </div>

        <div className="landscape-img">
          <img src={BlacklineImage2} alt="Blackline Work 2" />
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={BlacklineVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
export default Blackline1;
