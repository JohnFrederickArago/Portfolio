import React, { useState, useEffect } from "react";

const Hero =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224749/X-ray_Camera_Case_vh1hcg.mp4";

function Xray1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>VISUAL EFFECTS EXPERIMENT</p>
        </div>
        <div className="video-thumb-hero" onClick={() => setIsOpen(true)}>
          <video
            src={Hero}
            muted
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.target.currentTime = 3;
            }}
          />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Conducted a personal experiment exploring video masking techniques
              and X-ray-style visual effects. Focused on post-production
              workflows, layering, and compositing to create a stylized motion
              sequence, demonstrating experimentation with visual effects and
              creative editing techniques.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p>
                <p>2024</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Personal Project</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Visual Effects</p>
                <p>Editing</p>
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
            <video src={Hero} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
}
export default Xray1;
