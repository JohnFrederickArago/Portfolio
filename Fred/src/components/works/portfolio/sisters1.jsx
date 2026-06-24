import React, { useState, useEffect } from "react";

import Hero from "../../../assets/works/Sisters - Photo/Sisters1.jpg";
import SistersImage1 from "../../../assets/works/Sisters - Photo/Sisters2.jpg";
import SistersImage2 from "../../../assets/works/Sisters - Photo/Sisters3.jpg";
import SistersImage3 from "../../../assets/works/Sisters - Photo/Sisters4.jpg";
import SistersImage4 from "../../../assets/works/Sisters - Photo/Sisters5.jpg";
import SistersImage5 from "../../../assets/works/Sisters - Photo/Sisters6.jpg";
import SistersImage6 from "../../../assets/works/Sisters - Photo/Sisters7.jpg";
import SistersImage7 from "../../../assets/works/Sisters - Photo/Sisters8.jpg";

const SistersVideo =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782067010/H2_-_Sisters_Beauty_Lounge_x_L_Or%C3%A9al_Hair_Collection_ljfgpr.mp4";

function Sisters1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>'26 SUMMER HAIR COLLECTION</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="Sister Hero Image" className="sisters-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Produced professional headshots and video content for hair product
              marketing campaigns, handling both shooting and editing. Focused
              on clean composition, visual storytelling, and brand consistency
              to enhance product presentation across digital and print
              platforms.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2026</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>L'Oreal x Sisters Beauty Lounge</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Model Photography</p>
                <p>Video Production</p>
                <p>Lighting Direction</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="placeholder3"></div>
        </div>

        <div className="portfolio-works">
          <img
            src={SistersImage1}
            alt="Sister Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={SistersImage7}
            alt="Sister Work 7"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* VIDEO THUMBNAIL */}
        <div className="video-thumb" onClick={() => setIsOpen(true)}>
          <video src={SistersVideo} muted />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-works">
          <img
            src={SistersImage3}
            alt="Sister Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={SistersImage4}
            alt="Sister Work 4"
            loading="lazy"
            decoding="async"
          />
          <img
            src={SistersImage5}
            alt="Sister Work 5"
            loading="lazy"
            decoding="async"
          />
          <img
            src={SistersImage6}
            alt="Sister Work 6"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="landscape-img">
          <img
            src={SistersImage2}
            alt="Sister Work 2"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={SistersVideo} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
export default Sisters1;
