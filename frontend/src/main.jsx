import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
  // </React.StrictMode>
);
