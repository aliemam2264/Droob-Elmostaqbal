import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  // <BrowserRouter>
    <StrictMode>
      <AppRouter/>
    </StrictMode>
  // </BrowserRouter>
);
