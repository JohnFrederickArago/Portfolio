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
        </Routes>
      </main>
    </div>
  );
}
