import React, { Component } from "react";
import appDev from "../../assets/images/AppDevImg.svg";

export default class AppDevImg extends Component {
  render() {
    return (
      <img
        src={appDev}
        alt="App Development Illustration"
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
