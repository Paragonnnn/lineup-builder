import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DownloadImage from "./DownloadImage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/team/" element={<DownloadImage />}/>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
