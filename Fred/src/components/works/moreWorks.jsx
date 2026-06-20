import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import Sisters from "../../assets/works/Sisters - Photo/Sisters1.jpg";
import Caputo from "../../assets/works/Caputo - Photo/Caputo1.jpg";
import Blackline from "../../assets/works/Blackline - Photo/Blackline1.jpg";
import Hermes from "../../assets/works/Hermes Jetski - Photo/Hermes1.jpg";
import Offset from "../../assets/works/Offset '25 - Photo/Offset2.1.jpg";
import Adidas from "../../assets/works/Adidas Climacool - Photo/Climacool-Design1.jpg";

function MoreWorks() {
  const works = [
    { img: Sisters, title: "'26 SUMMER HAIR COLLECTION", to: "/works/sisters" },
    { img: Caputo, title: "Caputo", to: "/works/caputo" },
    { img: Blackline, title: "Blackline", to: "/works/blackline" },
    { img: Hermes, title: "Hermes", to: "/works/hermes" },
    { img: Offset, title: "Offset", to: "/works/offset" },
    { img: Adidas, title: "Adidas", to: "/works/adidas" },
  ];

  const randomWorks = useMemo(() => {
    const shuffled = [...works].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  return (
    <div className="more-works-container">
      <div className="more-works-header">
        <p className="gray">MORE WORKS</p>
        <p>See All</p>
      </div>

      <hr />

      <div className="more-works-img-container">
        {randomWorks.map((work) => (
          <NavLink key={work.to} to={work.to} className="more-works-img">
            <img src={work.img} alt={work.title} />
            <p className="img-title">{work.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MoreWorks;
