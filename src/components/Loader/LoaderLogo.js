// src/components/Loader/LoaderLogo.js
import React from "react";
import "./LoaderLogo.css";

export default function LoaderLogo() {
  return (
    <div className="loader__container">
      {/* Initials or logo (optional center letters) */}
      <div className="logo__symbol">NB</div>

      {/* Animated first and last name */}
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

      {/* Optional tagline */}
      <p className="tagline">Creating Experiences Through Code 💫</p>
    </div>
  );
}
