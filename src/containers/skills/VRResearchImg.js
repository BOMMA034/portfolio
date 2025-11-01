import React, { Component } from "react";
import vrResearch from "../../assets/images/VRResearchImg.svg";

export default class VRResearchImg extends Component {
  render() {
    return (
      <img
        src={vrResearch}
        alt="VR Research Illustration"
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
