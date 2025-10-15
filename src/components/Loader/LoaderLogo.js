// src/components/Loader/LoaderLogo.js
import React from "react";
import "./LoaderLogo.css";
import bg from "../../assets/images/spiral_bg.jpg"; // full-screen background image

export default function LoaderLogo() {
  return (
    <div
      className="loader__container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Initials */}
      <div className="initials">NB</div>

      {/* Your name */}
      <h1 className="full__name">Niharika Bommadi's Portfolio</h1>
    </div>
  );
}
