import React, { Component } from "react";
import newMessage from "../../assets/images/new_message.svg"; // ✅ make sure path is correct

export default class AddressImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div style={{ textAlign: "center" }}>
        <img
          src={newMessage}
          alt="Contact illustration"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
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
