import { useState } from "react";

import { getOptimizedVideoSrc } from "../../../utils/optimizedVideo";
import Hero from "../../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import HermesImage1 from "../../../assets/works/Hermes Jetski - Photo/Hermes2.jpg";
import HermesImage2 from "../../../assets/works/Hermes Jetski - Photo/Hermes3.jpg";
import HermesImage3 from "../../../assets/works/Hermes Jetski - Photo/Hermes4.jpg";
import HermesImage4 from "../../../assets/works/Hermes Jetski - Photo/Hermes5.jpg";

const HermesVideo = getOptimizedVideoSrc(
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782067022/HermesVideo_k5g3bw.mp4",
);

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
              Developed premium photo & videography content, creating an
              immersive lifestyle of a luxury watersports brand experience by
              utilizing cinematic footage and high-level messaging that
              encapsulates their performance, lifestyle, and brand ethos on
              digital platforms.
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
          <img
            src={HermesImage3}
            alt="Hermes Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={HermesImage4}
            alt="Hermes Work 4"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* VIDEO THUMBNAIL */}
        <div className="video-thumb" onClick={() => setIsOpen(true)}>
          <video src={HermesVideo} muted />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-works">
          <img
            src={HermesImage1}
            alt="Hermes Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={HermesImage2}
            alt="Hermes Work 2"
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
            <video
              src={HermesVideo}
              controls
              autoPlay
              playsInline
              preload="none"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Hermes1;
