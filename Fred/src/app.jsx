import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Works = lazy(() => import("./pages/works"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Sisters = lazy(() => import("./pages/portfolio/sisters"));
const Caputo = lazy(() => import("./pages/portfolio/caputo"));
const Hermes = lazy(() => import("./pages/portfolio/hermes"));
const Blackline = lazy(() => import("./pages/portfolio/blackline"));
const Offset = lazy(() => import("./pages/portfolio/offset"));
const Adidas = lazy(() => import("./pages/portfolio/adidas"));
const ATW = lazy(() => import("./pages/portfolio/atw"));
const GTR = lazy(() => import("./pages/portfolio/gtr"));
const FOG = lazy(() => import("./pages/portfolio/fog"));
const GP25 = lazy(() => import("./pages/portfolio/gp25"));
const Offset24 = lazy(() => import("./pages/portfolio/offset24"));
const Rosmetic = lazy(() => import("./pages/portfolio/rosmetic"));
const Friend = lazy(() => import("./pages/portfolio/friend"));
const Xray = lazy(() => import("./pages/portfolio/xray"));

export default function App() {
  return (
    <div className="app-root">
      <main className="container">
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
    </div>
  );
}
