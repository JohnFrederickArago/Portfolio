import React from "react";
import { motion } from "framer-motion";
import Sisters from "../../assets/works/Sisters - Photo/Sisters1.jpg";
import Caputo from "../../assets/works/Caputo - Photo/Caputo1.jpg";
import Blackline from "../../assets/works/Blackline - Photo/Blackline1.jpg";
import Hermes from "../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import Offset from "../../assets/works/Offset '25 - Photo/Offset2.1.jpg";
import Adidas from "../../assets/works/Adidas Climacool - Photo/Climacool-Design1.jpg";

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

          <div className="work-list2">
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
              <p>MODEL SHOOT</p>
              <p>PHOTOGRAPHY</p>
              <p>VIDEOGRAPHY</p>
              <p>POST-PRODUCTION</p>

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
          </div>

          <hr />

          <div className="work-list2">
            <div className="work-number-name">
              <p className="gray">02</p>
              <div className="number-name-sub">
                <p className="gray">02</p>
                <p>CAPUTO FLOUR X CASINNETO</p>
              </div>
              <p>CAPUTO FLOUR X CASINNETO</p>
              <img
                src={Caputo}
                alt="Caputo Work Preview"
                className="caputo-image"
              />
            </div>

            <div className="work-type">
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
          </div>

          <hr />

          <div className="work-list2">
            <div className="work-number-name">
              <p className="gray">03</p>
              <div className="number-name-sub">
                <p className="gray">03</p>
                <p>HERMES</p>
              </div>
              <p>HERMES</p>

              <img
                src={Hermes}
                alt="Hermes Work Preview"
                className="hermes-image"
              />
            </div>

            <div className="work-type">
              <p>PHOTOGRAPHY</p>
              <p>VIDEOGRAPHY</p>
              <p>EDITING</p>

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
          </div>

          <hr />

          <div className="work-list2">
            <div className="work-number-name">
              <p className="gray">04</p>
              <div className="number-name-sub">
                <p className="gray">04</p>
                <p>BLACKLINE MOTOR COMPANY</p>
              </div>
              <p>BLACKLINE MOTOR COMPANY</p>

              <img
                src={Blackline}
                alt="Blackline Work Preview"
                className="blackline-image"
              />
            </div>

            <div className="work-type">
              <p>PHOTOGRAPHY</p>
              <p>VIDEOGRAPHY</p>
              <p>PRODUCTION</p>
              <p>EDITING</p>

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
          </div>

          <hr />

          <div className="work-list2">
            <div className="work-number-name">
              <p className="gray">05</p>
              <div className="number-name-sub">
                <p className="gray">05</p>
                <p>OFFSET</p>
              </div>
              <p>OFFSET</p>

              <img
                src={Offset}
                alt="Offset Work Preview"
                className="offset-image"
              />
            </div>

            <div className="work-type">
              <p>PHOTOGRAPHY</p>
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
          </div>

          <hr />

          <div className="work-list2">
            <div className="work-number-name">
              <p className="gray">06</p>
              <div className="number-name-sub">
                <p className="gray">06</p>
                <p>ADIDAS CLIMACOOL SPEC AD</p>
              </div>
              <p>ADIDAS CLIMACOOL SPEC AD</p>

              <img
                src={Adidas}
                alt="Adidas Work Preview"
                className="adidas-image"
              />
            </div>

            <div className="work-type">
              <p>PHOTOGRAPHY</p>
              <p>PRODUCT SHOOT</p>
              <p>SPEC AD</p>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
