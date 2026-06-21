import React, { useState, useEffect } from "react";

import Hero from "../../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import HermesImage1 from "../../../assets/works/Hermes Jetski - Photo/Hermes2.jpg";
import HermesImage2 from "../../../assets/works/Hermes Jetski - Photo/Hermes3.jpg";
import HermesImage3 from "../../../assets/works/Hermes Jetski - Photo/Hermes4.jpg";
import HermesImage4 from "../../../assets/works/Hermes Jetski - Photo/Hermes5.jpg";

import HermesVideo from "../../../assets/works/Hermes Jetski - Video/HermesVideo.mp4";

function Hermes1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>MARINE LIFESTYLE SHOOT</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="Hermes Hero Image" className="hermes-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Created premium photo and video content showcasing a luxury
              watersports experience, combining cinematic visuals and refined
              storytelling to highlight performance, lifestyle, and brand
              identity across digital platforms.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Hermès Jet Ski</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Brand Photography</p>
                <p>Video Production</p>
                <p>Content</p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-works">
          <img src={HermesImage3} alt="Hermes Work 3" />
          <img src={HermesImage4} alt="Hermes Work 4" />
        </div>

        {/* VIDEO THUMBNAIL */}
        <div className="video-thumb" onClick={() => setIsOpen(true)}>
          <video src={HermesVideo} muted />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-works">
          <img src={HermesImage1} alt="Hermes Work 1" />
          <img src={HermesImage2} alt="Hermes Work 2" />
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={HermesVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
export default Hermes1;
