import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import Sisters from "../../assets/works/Sisters - Photo/Sisters1.jpg";
import Caputo from "../../assets/works/Caputo - Photo/Caputo1.jpg";
import Blackline from "../../assets/works/Blackline - Photo/Blackline1.jpg";
import Hermes from "../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import Offset from "../../assets/works/Offset '25 - Photo/Offset2.1.jpg";
import Adidas from "../../assets/works/Adidas Climacool - Photo/Climacool-Design1.jpg";
import ATW from "../../assets/works/ATW - Graphic Design/Post2.jpg";
import TypeR from "../../assets/works/Flat 12 - Photo/Flat12.11.jpg";
import FOG from "../../assets/works/FOG State - Photo/Post - Fear of God-04.jpg";
const GP25 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224684/Grand_Picnic_25_xykl2b.mp4";
import Offset24 from "../../assets/works/Offset '24 - Photo/Offset24.6.jpg";
const Rosmetic =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224728/Rosmetics2_svqzgp.mov";
import Friend from "../../assets/works/The FriEND Game Launch/11.1 - Release.png";
import XRay from "../../assets/works/X-ray Camera Case - Video/X-ray Camera Case.mp4";
import { video } from "framer-motion/client";

function MoreWorks() {
  const works = [
    { img: Sisters, title: "'26 SUMMER HAIR COLLECTION", to: "/works/sisters" },
    { img: Caputo, title: "EVENT HIGHLIGHT COLLECTION", to: "/works/caputo" },
    {
      img: Blackline,
      title: "AUTOMOTIVE STUDIO VISUALS",
      to: "/works/blackline",
    },
    { img: Hermes, title: "MARINE LIFESTYLE SHOOT", to: "/works/hermes" },
    { img: Offset, title: "'25 CAR CULTURE EXHIBITION", to: "/works/offset" },
    { img: Adidas, title: "CREATIVE AD CONCEPT", to: "/works/adidas" },
    { img: ATW, title: "MARKETING DESIGN INTER", to: "/works/atw" },
    { img: FOG, title: "EDITORIAL FASHION SHOOT", to: "/works/fog" },
    {
      img: Friend,
      title: "THE FRIEND — CREATIVE MARKETING",
      to: "/works/friend-game",
    },
    { video: GP25, title: "'25 GRAND PICNIC EXHIBITION", to: "/works/gp25" },
    { img: TypeR, title: "GT-R RELEASE EVENT", to: "/works/gtr" },
    {
      img: Offset24,
      title: "'24 CAR CULTURE EXHIBITION",
      to: "/works/offset24",
    },
    { video: Rosmetic, title: "CLINICAL OPERATIONS", to: "/works/rosmetic" },
    { video: XRay, title: "VISUAL EFFECT EXPERIMENT", to: "/works/xray" },
  ];

  const randomWorks = useMemo(() => {
    const shuffled = [...works].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="more-works-container">
      <div className="more-works-header">
        <p className="gray">MORE WORKS</p>
        <NavLink to="/works">
          <p className="underline">See All</p>
        </NavLink>
      </div>

      <hr />

      <div className="more-works-img-container">
        {randomWorks.map((work) => (
          <NavLink key={work.to} to={work.to} className="more-works-img">
            {work.video ? (
              <video
                src={work.video}
                alt={work.title}
                loop
                autoPlay
                muted
                playsInline
              />
            ) : (
              <img src={work.img} alt={work.title} />
            )}
            <p className="img-title">{work.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MoreWorks;
