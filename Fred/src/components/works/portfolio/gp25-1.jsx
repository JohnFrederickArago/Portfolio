import { useState } from "react";

import { getOptimizedVideoSrc } from "../../../utils/optimizedVideo";

const Hero = getOptimizedVideoSrc(
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224684/Grand_Picnic_25_xykl2b.mp4",
);

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
              Video creation and post production support for the car exhibition
              at Grand Picnic; recording displayed automobiles, interacting
              guests, the buzz and atmosphere. Visuals are comprised of motion,
              rhythm and framing; intended to support marketing and online
              content.
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
            <video src={Hero} controls autoPlay playsInline preload="none" />
          </div>
        </div>
      )}
    </>
  );
}
export default GP25_1;
