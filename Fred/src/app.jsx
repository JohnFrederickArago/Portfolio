import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Works from "./pages/works";
import About from "./pages/about";
import Contact from "./pages/contact";

export default function App() {
  return (
    <div className="app-root">
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
