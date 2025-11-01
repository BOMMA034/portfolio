import React, { Component } from "react";
import aiResearch from "../../assets/images/AIResearchImg.svg";

export default class AIResearchImg extends Component {
  render() {
    return (
      <img
        src={aiResearch}
        alt="AI & Data-Driven Research Illustration"
        style={{
          width: "70%",
          maxWidth: "450px",
          height: "auto",
          objectFit: "contain",
          margin: "auto",
          display: "block",
        }}
      />
    );
  }
}
