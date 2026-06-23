import React, { useState, useEffect } from "react";

const Hero =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224684/Grand_Picnic_25_xykl2b.mp4";

function GP25_1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>AUTOMOTIVE STUDIO VISUALS</p>
        </div>
        <div className="video-thumb-hero" onClick={() => setIsOpen(true)}>
          <video src={Hero} muted />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Shot and edited video coverage for a car exhibition at Grand
              Picnic, capturing showcased vehicles, crowd engagement, and the
              overall atmosphere of the event. Focused on dynamic movement,
              pacing, and cinematic framing to create an engaging visual
              narrative for promotional and digital use.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Flat 12</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Videography</p>
                <p>Editing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="video-modal" onClick={() => setIsOpen(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={Hero} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
export default GP25_1;
