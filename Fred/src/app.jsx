import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Works from "./pages/works";
import About from "./pages/about";
import Contact from "./pages/contact";
import Sisters from "./pages/portfolio/sisters";
import Caputo from "./pages/portfolio/caputo";
import Hermes from "./pages/portfolio/hermes";
import Blackline from "./pages/portfolio/blackline";
import Offset from "./pages/portfolio/offset";
import Adidas from "./pages/portfolio/adidas";
import ATW from "./pages/portfolio/atw";
import GTR from "./pages/portfolio/gtr";
import FOG from "./pages/portfolio/fog";
import GP25 from "./pages/portfolio/gp25";
import Offset24 from "./pages/portfolio/offset24";
import Rosmetic from "./pages/portfolio/rosmetic";
import Friend from "./pages/portfolio/friend";
import Xray from "./pages/portfolio/xray";

export default function App() {
  return (
    <div className="app-root">
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works/sisters" element={<Sisters />} />
          <Route path="/works/caputo" element={<Caputo />} />
          <Route path="/works/hermes" element={<Hermes />} />
          <Route path="/works/blackline" element={<Blackline />} />
          <Route path="/works/offset" element={<Offset />} />
          <Route path="/works/adidas" element={<Adidas />} />
          <Route path="/works/atw" element={<ATW />} />
          <Route path="/works/gtr" element={<GTR />} />
          <Route path="/works/fog" element={<FOG />} />
          <Route path="/works/gp25" element={<GP25 />} />
          <Route path="/works/offset24" element={<Offset24 />} />
          <Route path="/works/rosmetic" element={<Rosmetic />} />
          <Route path="/works/friend-game" element={<Friend />} />
          <Route path="/works/xray" element={<Xray />} />
        </Routes>
      </main>
    </div>
  );
}
