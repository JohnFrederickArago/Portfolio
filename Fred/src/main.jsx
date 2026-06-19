import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import SmoothScrollLayout from "./SmoothScrollLayout.jsx";
import "./styles/index.css";
import "./styles/home.css";
import "./styles/works.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScrollLayout>
        <App />
      </SmoothScrollLayout>
    </BrowserRouter>
  </React.StrictMode>,
);
