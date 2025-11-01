import React, { Component } from "react";
import appDev from "../../assets/images/AppDevImg.svg";

export default class AppDevImg extends Component {
  render() {
    return (
      <img
        src={appDev}
        alt="App Development Illustration"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "-20px",
        }}
      />
    );
  }
}
