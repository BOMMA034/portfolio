// src/components/Loader/LoaderLogo.js
import React from "react";
import "./LoaderLogo.css";

export default function LoaderLogo() {
  return (
    <div className="loader__container">
      <div className="logo__wrapper">
        {"Niharika".split("").map((ch, i) => (
          <span key={i} className="logo__text">
            {ch}
          </span>
        ))}
      </div>

      <div className="logo__wrapper second__line">
        {"Bommadi".split("").map((ch, i) => (
          <span key={i} className="logo__text second">
            {ch}
          </span>
        ))}
      </div>

      <p className="tagline">Building Ideas with Code 💡</p>
    </div>
  );
}
