import React, { Component } from "react";

export default class VRResearchImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Virtual Reality Illustration"
      >
        {/* Ground shadow */}
        <ellipse
          cx="400"
          cy="560"
          rx="220"
          ry="18"
          fill={theme.compImgHighlight}
          opacity="0.3"
        />

        {/* VR wall display */}
        <rect
          x="380"
          y="100"
          width="350"
          height="230"
          rx="6"
          fill={theme.compImgHighlight}
        />
        <path
          d="M390 140 Q520 60 640 140 Q560 100 500 180 Q480 200 390 140 Z"
          fill={theme.imageHighlight}
          opacity="0.4"
        />

        {/* Person inside screen */}
        <rect x="530" y="160" width="16" height="70" fill={theme.jacketColor} />
        <circle cx="538" cy="150" r="10" fill="#ffb9b9" />
        <rect x="536" y="230" width="6" height="35" fill={theme.dark} />

        {/* VR user body */}
        <path
          d="M250 430c0 30 0 60 0 90 0 10 10 10 25 10s25 0 25-10c0-30 0-60 0-90Z"
          fill={theme.dark}
        />
        <path
          d="M245 310c-3 30-6 60-9 90l10 60h55l10-80-8-70Z"
          fill={theme.jacketColor}
        />

        {/* Head */}
        <circle cx="270" cy="240" r="28" fill="#ffb9b9" />

        {/* Shirt / jacket */}
        <path d="M250 260l-15 60h80l-8-60Z" fill={theme.imageHighlight} />

        {/* VR headset */}
        <rect x="250" y="225" width="65" height="18" rx="4" fill={theme.dark} />
        <rect
          x="250"
          y="225"
          width="65"
          height="8"
          rx="2"
          fill={theme.text}
          opacity="0.3"
        />

        {/* Arm to side */}
        <path
          d="M225 340c-5 25-15 40-10 55 5 10 20 15 30 10s5-25 5-25Z"
          fill={theme.jacketColor}
        />

        {/* Floor / projection line */}
        <path
          d="M320 490 Q480 460 700 480"
          stroke={theme.text}
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>
    );
  }
}
