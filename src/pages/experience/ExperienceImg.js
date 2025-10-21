import React, { Component } from "react";
import experienceImage from "../../assets/images/career_development.svg";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={experienceImage}
          alt="Experience illustration"
          style={{
            width: "120%", // make it a little bigger
            maxWidth: "600px", // adjust as you like
            height: "auto",
            marginTop: "-20px", // optional: to align vertically with text
            borderRadius: "10px",
            filter:
              theme.name === "dark" ? "brightness(0.9) contrast(1.1)" : "none",
            transition: "all 0.3s ease-in-out",
          }}
        />
      </div>
    );
  }
}
