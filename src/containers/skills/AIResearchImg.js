import React, { Component } from "react";
import aiResearch from "../../assets/images/AIResearchImg.svg";

export default class AIResearchImg extends Component {
  render() {
    return (
      <img
        src={aiResearch}
        alt="AI Research Illustration"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "-20px",
        }}
      />
    );
  }
}
