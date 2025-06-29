import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import RootContext from "./context/RootContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RootContext>
      <App />
    </RootContext>
  </BrowserRouter>
);
