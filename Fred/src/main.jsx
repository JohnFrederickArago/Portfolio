import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app.jsx";
import SmoothScrollLayout from "./SmoothScrollLayout.jsx";
import "./styles/index.css";
import "./styles/home.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SmoothScrollLayout>
      <App />
    </SmoothScrollLayout>
  </BrowserRouter>,
);
