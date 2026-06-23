import React from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import Sisters from "../../assets/works/Sisters - Photo/Sisters1.jpg";
import Caputo from "../../assets/works/Caputo - Photo/Caputo1.jpg";
import Blackline from "../../assets/works/Blackline - Photo/Blackline1.jpg";
import Hermes from "../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import Offset from "../../assets/works/Offset '25 - Photo/Offset2.1.jpg";
import Adidas from "../../assets/works/Adidas Climacool - Photo/Climacool-Design1.jpg";

import ATW from "../../assets/works/ATW - Graphic Design/Post2.jpg";
import GTR from "../../assets/works/Flat 12 - Photo/Flat12.11.jpg";
import FOG from "../../assets/works/FOG State - Photo/Post - Fear of God-04.jpg";
const GP25 =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224684/Grand_Picnic_25_xykl2b.mp4";
import Offset24 from "../../assets/works/Offset '24 - Photo/Offset24.6.jpg";
const Rosmetic =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224728/Rosmetics2_svqzgp.mov";
import Friend from "../../assets/works/The FriEND Game Launch/11.1 - Release.png";
const XRay =
  "https://res.cloudinary.com/dc6lbqlfl/video/upload/v1782224749/X-ray_Camera_Case_vh1hcg.mp4";

function Work() {
  return (
    <>
      <div className="works-container2">
        <div className="works-header">
          <p>WORK</p>
          <p className="gray2">(22-26)</p>
        </div>

        <div className="work-list-container">
          <div className="work-list2">
            <div className="work-number-name">
              <p className="gray">#</p>

              <div className="number-name-sub">
                <p className="gray">#</p>
                <p className="gray">NAME ✦</p>
              </div>
              <p className="gray">NAME ✦</p>
            </div>

            <div className="work-type">
              <p className="gray">TYPE ✦</p>
            </div>

            <div className="work-year">
              <p className="gray">YEAR ✦</p>
            </div>
          </div>

          <hr />

          <NavLink to="/works/sisters" className="work-list2">
            <div className="work-number-name">
              <p className="gray">01</p>
              <div className="number-name-sub">
                <p className="gray">01</p>
                <p>'26 SUMMER HAIR COLLECTION</p>
              </div>
              <p>'26 SUMMER HAIR COLLECTION</p>
              <img
                src={Sisters}
                alt="Sisters Work Preview"
                className="sisters-image"
              />
            </div>

            <div className="work-type">
              <p>MODEL PHOTOGRAPHY</p>
              <p>VIDEO PRODUCTION</p>
              <p>LIGHTING DIRECTION</p>

              <img
                src={Sisters}
                alt="Sisters Work Preview"
                className="sisters-image"
              />

              <div className="work-year-type">
                <p>2026</p>
              </div>
            </div>

            <div className="work-year">
              <p>2026</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/caputo" className="work-list2">
            <div className="work-number-name">
              <p className="gray">02</p>
              <div className="number-name-sub">
                <p className="gray">02</p>
                <p>EVENT HIGHLIGHT COLLECTION</p>
              </div>
              <p>EVENT HIGHLIGHT COLLECTION</p>
              <img
                src={Caputo}
                alt="Caputo Work Preview"
                className="caputo-image"
              />
            </div>

            <div className="work-type">
              <p>EVENT COVERAGE</p>
              <p>PHOTOGRAPHY</p>
              <p>VIDEOGRAPHY</p>

              <img
                src={Caputo}
                alt="Caputo Work Preview"
                className="caputo-image"
              />

              <div className="work-year-type">
                <p>2026</p>
              </div>
            </div>

            <div className="work-year">
              <p>2026</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/friend-game" className="work-list2">
            <div className="work-number-name">
              <p className="gray">03</p>
              <div className="number-name-sub">
                <p className="gray">03</p>
                <p>THE FRIEND — CREATIVE MARKETING</p>
              </div>
              <p>THE FRIEND — CREATIVE MARKETING</p>
              <img
                src={Friend}
                alt="Friend Work Preview"
                className="friend-image"
              />
            </div>

            <div className="work-type">
              <p>MOTION GRAPHICS</p>
              <p>GRAPHIC DESIGN</p>
              <p>CINEMATOGRAPHY</p>

              <img
                src={Friend}
                alt="Friend Work Preview"
                className="friend-image"
              />

              <div className="work-year-type">
                <p>2026</p>
              </div>
            </div>

            <div className="work-year">
              <p>2026</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/hermes" className="work-list2">
            <div className="work-number-name">
              <p className="gray">04</p>
              <div className="number-name-sub">
                <p className="gray">04</p>
                <p>MARINE LIFESTYLE SHOOT</p>
              </div>
              <p>MARINE LIFESTYLE SHOOT</p>

              <img
                src={Hermes}
                alt="Hermes Work Preview"
                className="hermes-image"
              />
            </div>

            <div className="work-type">
              <p>BRAND PHOTOGRAPHY</p>
              <p>VIDEO PRODUCTION</p>
              <p>CONTENT</p>

              <img
                src={Hermes}
                alt="Hermes Work Preview"
                className="hermes-image"
              />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/blackline" className="work-list2">
            <div className="work-number-name">
              <p className="gray">05</p>
              <div className="number-name-sub">
                <p className="gray">05</p>
                <p>AUTOMOTIVE STUDIO VISUALS</p>
              </div>
              <p>AUTOMOTIVE STUDIO VISUALS</p>

              <img
                src={Blackline}
                alt="Blackline Work Preview"
                className="blackline-image"
              />
            </div>

            <div className="work-type">
              <p>VIDEOGRAPHY</p>
              <p>PHOTOGRAPHY</p>
              <p>POST PRODUCTION</p>

              <img
                src={Blackline}
                alt="Blackline Work Preview"
                className="blackline-image"
              />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/offset" className="work-list2">
            <div className="work-number-name">
              <p className="gray">06</p>
              <div className="number-name-sub">
                <p className="gray">06</p>
                <p>'25 CAR CULTURE EXHIBITION</p>
              </div>
              <p>'25 CAR CULTURE EXHIBITION</p>

              <img
                src={Offset}
                alt="Offset Work Preview"
                className="offset-image"
              />
            </div>

            <div className="work-type">
              <p>VISUAL STORYTELLING</p>
              <p>COMPOSITION</p>

              <img
                src={Offset}
                alt="Offset Work Preview"
                className="offset-image"
              />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/atw" className="work-list2">
            <div className="work-number-name">
              <p className="gray">07</p>
              <div className="number-name-sub">
                <p className="gray">07</p>
                <p>MARKETING DESIGN INTERN</p>
              </div>
              <p>MARKETING DESIGN INTERN</p>

              <img src={ATW} alt="ATW Work Preview" className="atw-image" />
            </div>

            <div className="work-type">
              <p>MARKETING DESIGN</p>
              <p>GRAPHIC DESIGN</p>
              <p>BRAND DESIGN</p>

              <img src={ATW} alt="ATW Work Preview" className="atw-image" />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/fog" className="work-list2">
            <div className="work-number-name">
              <p className="gray">08</p>
              <div className="number-name-sub">
                <p className="gray">08</p>
                <p>EDITORIAL FASHION SHOOT</p>
              </div>
              <p>EDITORIAL FASHION SHOOT</p>

              <img src={FOG} alt="FOG Work Preview" className="fog-image" />
            </div>

            <div className="work-type">
              <p>SPEC CAMPAIGN</p>
              <p>EDITORIAL</p>
              <p>PHOTOGRAPHY</p>

              <img src={FOG} alt="FOG Work Preview" className="fog-image" />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/gp25" className="work-list2">
            <div className="work-number-name">
              <p className="gray">09</p>
              <div className="number-name-sub">
                <p className="gray">09</p>
                <p>'25 GRAND PICNIC EXHIBITION</p>
              </div>
              <p>'25 GRAND PICNIC EXHIBITION</p>
              <video src={GP25} loop autoPlay muted playsInline />
            </div>

            <div className="work-type">
              <p>VIDEOGRAPHY</p>
              <p>EDITING</p>

              <video src={GP25} loop autoPlay muted playsInline />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/rosmetic" className="work-list2">
            <div className="work-number-name">
              <p className="gray">10</p>
              <div className="number-name-sub">
                <p className="gray">10</p>
                <p>CLINICAL OPERATIONS</p>
              </div>
              <p>CLINICAL OPERATIONS</p>
              <video src={Rosmetic} loop autoPlay muted playsInline />
            </div>

            <div className="work-type">
              <p>VIDEOGRAPHY</p>
              <p>HEALTHCARE</p>
              <p>CONTENT</p>

              <video src={Rosmetic} loop autoPlay muted playsInline />

              <div className="work-year-type">
                <p>2025</p>
              </div>
            </div>

            <div className="work-year">
              <p>2025</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/xray" className="work-list2">
            <div className="work-number-name">
              <p className="gray">11</p>
              <div className="number-name-sub">
                <p className="gray">11</p>
                <p>VISUAL EFFECT EXPERIMENT</p>
              </div>
              <p>VISUAL EFFECT EXPERIMENT</p>
              <video src={XRay} loop autoPlay muted playsInline />
            </div>

            <div className="work-type">
              <p>VFX</p>
              <p>EDITING</p>
              <p>CONTENT</p>

              <video src={XRay} loop autoPlay muted playsInline />

              <div className="work-year-type">
                <p>2024</p>
              </div>
            </div>

            <div className="work-year">
              <p>2024</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/adidas" className="work-list2">
            <div className="work-number-name">
              <p className="gray">12</p>
              <div className="number-name-sub">
                <p className="gray">12</p>
                <p>CREATIVE AD CONCEPT</p>
              </div>
              <p>CREATIVE AD CONCEPT</p>

              <img
                src={Adidas}
                alt="Adidas Work Preview"
                className="adidas-image"
              />
            </div>

            <div className="work-type">
              <p>GRAPHIC DESIGN</p>
              <p>BRAND CAMPAIGN</p>
              <p>PRODUCT SHOOT</p>
              <p>ART DIRECTION</p>

              <img
                src={Adidas}
                alt="Adidas Work Preview"
                className="adidas-image"
              />

              <div className="work-year-type">
                <p>2024</p>
              </div>
            </div>

            <div className="work-year">
              <p>2024</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/offset24" className="work-list2">
            <div className="work-number-name">
              <p className="gray">13</p>
              <div className="number-name-sub">
                <p className="gray">13</p>
                <p>'24 CAR CULTURE EXHIBITION</p>
              </div>
              <p>'24 CAR CULTURE EXHIBITION</p>

              <img
                src={Offset24}
                alt="Offset24 Work Preview"
                className="offset24-image"
              />
            </div>

            <div className="work-type">
              <p>VISUAL STORYTELLING</p>
              <p>COMPOSITION</p>

              <img
                src={Offset24}
                alt="Offset24 Work Preview"
                className="offset24-image"
              />

              <div className="work-year-type">
                <p>2024</p>
              </div>
            </div>

            <div className="work-year">
              <p>2024</p>
            </div>
          </NavLink>

          <hr />

          <NavLink to="/works/gtr" className="work-list2">
            <div className="work-number-name">
              <p className="gray">14</p>
              <div className="number-name-sub">
                <p className="gray">14</p>
                <p>GT-R RELEASE EVENT</p>
              </div>
              <p>GT-R RELEASE EVENT</p>

              <img src={GTR} alt="GTR Work Preview" className="gtr-image" />
            </div>

            <div className="work-type">
              <p>AUTOMOTIVE</p>
              <p>PHOTOGRAPHY</p>
              <p>COMPOSITION</p>

              <img src={GTR} alt="GTR Work Preview" className="gtr-image" />

              <div className="work-year-type">
                <p>2024</p>
              </div>
            </div>

            <div className="work-year">
              <p>2024</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Work;
