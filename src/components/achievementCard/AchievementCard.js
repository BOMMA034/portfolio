import React from "react";
import "./AchievementCard.css";
import { Fade } from "react-reveal";

export default function AchievementCard({ ach, theme }) {
  function openLinkInNewTab(url) {
    if (url && url !== "") {
      const win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div
      className="achievement-card-div"
      style={{ backgroundColor: theme.highlight }}
      onClick={() => openLinkInNewTab(ach.url)}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={ach.id}>
          <div className="achievement-name-div">
            <p className="achievement-name" style={{ color: theme.text }}>
              {ach.name}
            </p>
          </div>

          <p className="achievement-description" style={{ color: theme.text }}>
            {ach.description}
          </p>

          <div className="achievement-details">
            <p
              className="achievement-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Achieved on {ach.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
