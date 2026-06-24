import { useState } from "react";

import { getOptimizedVideoSrc } from "../../../utils/optimizedVideo";
const Hero = getOptimizedVideoSrc(
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224728/Rosmetics2_svqzgp.mov",
);

function Rosmetic1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>CLINICAL OPERATIONS</p>
        </div>
        <div className="video-thumb-hero" onClick={() => setIsOpen(true)}>
          <video
            src={Hero}
            muted
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.target.currentTime = 25; // jump to 1 second frame
            }}
          />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Directed and edited professional-style video footage for a medical
              center documenting a clinical procedure, emphasizing clarity,
              conciseness, and a patient-centric narrative for communication and
              educational purposes.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p>
                <p>2025</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Rosmetic Medical Center</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Videography</p>
                <p>Healthcare</p>
                <p>Content</p>
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
            <video
              src={Hero}
              controls
              autoPlay
              playsInline
              preload="none"
              className="rosmetic-video"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Rosmetic1;
