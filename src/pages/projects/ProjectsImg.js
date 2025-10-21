import React, { Component } from "react";
import projectImage from "../../assets/images/ideas_flow.svg";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={projectImage}
          alt="Projects illustration"
          style={{
            width: "120%", // make it a little bigger
            maxWidth: "600px", // adjust if needed
            height: "auto",
            marginTop: "-20px", // optional: to align vertically with title
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
