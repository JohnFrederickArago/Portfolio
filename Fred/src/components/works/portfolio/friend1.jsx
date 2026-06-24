import React, { useState, useEffect } from "react";

import Hero from "../../../assets/works/The FriEND Game Launch/11.1 - Release.png";
import FriendImage1 from "../../../assets/works/The FriEND Game Launch/1 - Poster.png";
import FriendImage2 from "../../../assets/works/The FriEND Game Launch/3 - Meet the Team.png";
import FriendImage3 from "../../../assets/works/The FriEND Game Launch/5 - Date Reveal.png";
import FriendImage4 from "../../../assets/works/The FriEND Game Launch/9 - Playlist.png";
import FriendImage5 from "../../../assets/works/The FriEND Game Launch/11.1 - Release.png";
import FriendImage6 from "../../../assets/works/The FriEND Game Launch/11.2 - Release.png";
import FriendImage7 from "../../../assets/works/The FriEND Game Launch/12 - Merchandise.jpg";

import FriendImage9 from "../../../assets/works/The FriEND Game Launch/Thumbnail - Documentary.png";
import FriendImage10 from "../../../assets/works/The FriEND Game Launch/Thumbnail - Gameplay.jpg";

import FriendImage12 from "../../../assets/works/The FriEND Game Launch/Thumbnail - Trailer.jpg";

const FriendVideo1 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224893/7.2_-_Meet_the_Characters_May_zquyki.mp4";
const FriendVideo2 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224896/7.3_-_Meet_the_Characters_Johnny_o4uegx.mp4";
const FriendVideo3 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224898/7.1_-_Meet_the_Characters_Louis_gzcflp.mp4";
const FriendVideo4 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224909/7.4_-_Meet_the_Characters_Richard_ty4gis.mp4";
const FriendVideo5 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224995/2_-_Teaser_Trailer_nudyom.mp4";
const FriendVideo6 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782225097/Sequence_01_rbijns.mp4";
const FriendVideo7 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782225611/10_-_Trailer_1_z4dr5n.mp4";

function Friend1() {
  const [isOpen, setIsOpen] = useState(false);

  const videos = [
    { id: 5, src: FriendVideo5 },
    { id: 6, src: FriendVideo6 },
    { id: 7, src: FriendVideo7 },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p>THE FRIEND — CREATIVE MARKETING</p>
        </div>
        <div className="header-hero-img">
          <img
            src={Hero}
            alt="The Friend Hero Image"
            className="friend-image"
          />
        </div>

        <div className="portfolio-about">
          <div className="portfolio-about-left">
            <p>
              Co-founded a student game development project and led the creation
              of its marketing and visual content. Developed social media
              campaigns, promotional trailers, merchandise designs, and branded
              graphics to establish a cohesive identity and build audience
              engagement. Collaborated closely with the team to shape the game's
              public presence from concept to launch.
            </p>
          </div>
          <div className="portfolio-about-right">
            <div className="portfolio-about-right-top">
              <div className="date">
                <p className="gray">DATE:</p> <p>2026</p>
              </div>
              <div className="client">
                <p className="gray">CLIENT:</p>
                <p>Bath Spa University, RAK</p>
              </div>
            </div>
            <div className="portfolio-about-right-bottom">
              <div className="type">
                <p className="gray">TYPE:</p>
                <p>Motion Graphics</p>
                <p>Graphic Design</p>
                <p>Cinematography</p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-works">
          <img
            src={FriendImage5}
            alt="Friend Work 5"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage6}
            alt="Friend Work 6"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage1}
            alt="Friend Work 1"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage2}
            alt="Friend Work 2"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage3}
            alt="Friend Work 3"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage7}
            alt="Friend Work 7"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div
          className="video-thumb"
          onClick={() => setSelectedVideo(FriendVideo5)}
        >
          <video
            src={FriendVideo5}
            muted
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.target.currentTime = 26; // jump to 1 second frame
            }}
          />
          <div className="play-button">▶</div>
        </div>

        <div className="video-list">
          <video src={FriendVideo1} muted autoPlay loop />
          <video src={FriendVideo3} muted autoPlay loop />
          <video src={FriendVideo2} muted autoPlay loop />
          <video src={FriendVideo4} muted autoPlay loop />
        </div>

        <div
          className="video-thumb"
          onClick={() => setSelectedVideo(FriendVideo6)}
        >
          <video
            src={FriendVideo6}
            muted
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.target.currentTime = 90; // jump to 1 second frame
            }}
          />
          <div className="play-button">▶</div>
        </div>

        <div className="portfolio-works">
          <img
            src={FriendImage4}
            alt="Friend Work 4"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage9}
            alt="Friend Work 9"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage10}
            alt="Friend Work 10"
            loading="lazy"
            decoding="async"
          />
          <img
            src={FriendImage12}
            alt="Friend Work 12"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          className="video-thumb"
          onClick={() => setSelectedVideo(FriendVideo7)}
        >
          <video
            src={FriendVideo7}
            muted
            preload="metadata"
            onLoadedMetadata={(e) => {
              e.target.currentTime = 58; // jump to 1 second frame
            }}
          />
          <div className="play-button">▶</div>
        </div>
      </div>

      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={selectedVideo} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </>
  );
}
export default Friend1;
