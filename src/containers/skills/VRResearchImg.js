import React, { Component } from "react";

export default class VRResearchImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="709.383"
        height="800"
        viewBox="0 0 709.383 800"
        role="img"
        aria-label="VR Research Illustration"
      >
        <g transform="translate(-770.031 -183.09)">
          <g transform="translate(770.031 394.384)">
            <g transform="translate(0)">
              <path
                d="M976.874,603.068l-2.185,76.485-23.31,89.6s5.1,15.3,1.457,18.939-20.4,10.2-20.4,10.2l13.84-190.849Z"
                transform="translate(-879.326 -259.492)"
                fill={theme.compImgHighlight}
              />
              <path
                d="M921.483,774.237s-8.313,18.288,3.325,19.95,65.393,6.1,62.068-3.325-43.78-18.287-43.78-18.287Z"
                transform="translate(-874.543 -246.014)"
                fill={theme.dark}
              />
              <path
                d="M927.041,540.331s8.741,47.348,14.569,55.361-2.914,66.287-2.914,66.287-13.112,83.769-7.284,96.881,4.37,8.741,3.642,16.026-2.185,13.112,0,19.667,2.185,5.828,2.914,9.469,0,23.31,0,23.31,31.323,10.927,36.422-5.1c0,0-7.284-10.2-5.1-18.211a97,97,0,0,0,3.642-24.766v-15.3l33.508-125.29,8.012-45.163s-2.185-45.891-10.2-50.262S927.041,540.331,927.041,540.331Z"
                transform="translate(-911.078 -264.5)"
                fill={theme.compImgHighlight}
              />
              {/* ...rest of your VR SVG paths here ... */}
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
