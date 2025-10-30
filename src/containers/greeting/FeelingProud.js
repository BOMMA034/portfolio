import React, { Component } from "react";
import proudCoder from "../../assets/images/proud_coder.svg"; // adjust path if needed

class FeelingProud extends Component {
  render() {
    return (
      <img
        src={proudCoder}
        alt="Proud Coder"
        style={{
          width: "100%",
          maxWidth: "700px",
          marginTop: "-20px",
        }}
      />
    );
  }
}

export default FeelingProud;
