import { useState } from "react";

import { getOptimizedVideoSrc } from "../../../utils/optimizedVideo";
import Hero from "../../../assets/works/Caputo - Photo/Caputo1.jpg";
import CaputoImage1 from "../../../assets/works/Caputo - Photo/Caputo2.jpg";
import CaputoImage2 from "../../../assets/works/Caputo - Photo/Caputo3.jpg";
import CaputoImage3 from "../../../assets/works/Caputo - Photo/Caputo4.jpg";
import CaputoImage4 from "../../../assets/works/Caputo - Photo/Caputo5.jpg";
import CaputoImage5 from "../../../assets/works/Caputo - Photo/Caputo6.jpg";
import CaputoImage6 from "../../../assets/works/Caputo - Photo/Caputo7.jpg";
import CaputoImage7 from "../../../assets/works/Caputo - Photo/Caputo8.jpg";
import CaputoImage8 from "../../../assets/works/Caputo - Photo/Caputo9.jpg";
import CaputoImage9 from "../../../assets/works/Caputo - Photo/Caputo10.jpg";
import CaputoImage10 from "../../../assets/works/Caputo - Photo/Caputo11.jpg";
import CaputoImage11 from "../../../assets/works/Caputo - Photo/Caputo12.jpg";

const CaputoVideo = getOptimizedVideoSrc(
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782066989/Casinetto_x_Caputo_zppaq5.mp4",
);

function Caputo1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>EVENT HIGHLIGHT COLLECTION</p>
        </div>
        <div className="header-hero-img">
          <img src={Hero} alt="Caputo Hero Image" className="caputo-image" />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Captured event and booth photography, documenting key moments,
              audience engagement, and brand interactions throughout the
              activation. Focused on authentic storytelling and strong visual
              composition to reflect the atmosphere, energy, and impact of the
              event across promotional and marketing use.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2026</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Caputo Flour x Casinetto</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Event Coverage</p>
                <p>Photography</p>
                <p>Videography</p>
              </div>
            </div>
          </div>
          <div className="placeholder3"></div>
        </div>

        <div className="portfolio-works">
          <img
            src={CaputoImage5}
            alt="Caputo Work 5"
            loading="lazy"
            decoding="async"
          />
          <img
            src={CaputoImage6}
            alt="Caputo Work 6"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* VIDEO THUMBNAIL */}
        <div className="video-thumb" onClick={() => setIsOpen(true)}>
          <video src={CaputoVideo} muted />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-works">
          <img
            src={CaputoImage3}
            alt="Caputo Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={CaputoImage2}
            alt="Caputo Work 2"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="landscape-img">
          <img
            src={CaputoImage4}
            alt="Caputo Work 4"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="portfolio-works">
          <img
            src={CaputoImage1}
            alt="Caputo Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={CaputoImage7}
            alt="Caputo Work 7"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="landscape-img">
          <img
            src={CaputoImage10}
            alt="Caputo Work 10"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="portfolio-works">
          <img
            src={CaputoImage8}
            alt="Caputo Work 8"
            loading="lazy"
            decoding="async"
          />
          <img
            src={CaputoImage11}
            alt="Caputo Work 11"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="landscape-img">
          <img
            src={CaputoImage9}
            alt="Caputo Work 9"
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
              src={CaputoVideo}
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

export default Caputo1;
