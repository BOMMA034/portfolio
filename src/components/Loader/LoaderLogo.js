import React from "react";
import "./LoaderLogo.css";
import spiral from "../../assets/images/spiral_bg.jpg"; // your tech spiral background

export default function LoaderLogo() {
  return (
    <div className="loader__container">
      {/* Background spiral */}
      <div className="spiral__wrapper">
        <img src={spiral} alt="Spiral Background" className="spiral__image" />

        {/* Your initials inside spiral */}
        <div className="initials">NB</div>
      </div>

      {/* Your name appearing on top */}
      <h1 className="full__name">Niharika Bommadi</h1>
    </div>
  );
}
