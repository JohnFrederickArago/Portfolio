import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

import App from "./app.jsx";
import SmoothScrollLayout from "./SmoothScrollLayout.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { LenisProvider } from "./LenisContext.jsx";

import "./styles/index.css";
import "./styles/home.css";
import "./styles/works.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/portfolio/portfolio.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LazyMotion features={domAnimation} strict>
      <BrowserRouter>
        <LenisProvider>
          <ScrollToTop />
          <SmoothScrollLayout>
            <App />
          </SmoothScrollLayout>
        </LenisProvider>
      </BrowserRouter>
    </LazyMotion>
  </StrictMode>,
);
