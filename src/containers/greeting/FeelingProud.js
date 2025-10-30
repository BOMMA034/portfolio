import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="600"
        viewBox="0 0 800 600"
        role="img"
      >
        <title>proud_coder</title>
        <rect width="800" height="600" fill="none" />
        <g>
          {/* Monitor */}
          <rect
            x="480"
            y="120"
            width="160"
            height="120"
            rx="8"
            fill="#fff"
            stroke={theme.text}
            strokeWidth="4"
          />
          <rect
            x="480"
            y="250"
            width="160"
            height="10"
            rx="2"
            fill={theme.text}
          />
          <rect
            x="520"
            y="260"
            width="80"
            height="10"
            rx="2"
            fill={theme.text}
          />
          <rect
            x="540"
            y="270"
            width="40"
            height="10"
            rx="2"
            fill={theme.text}
          />
          <text x="515" y="175" fontSize="24" fill={theme.imageHighlight}>
            &lt;/&gt;
          </text>

          {/* Desk */}
          <path
            d="M200 380 h400 a40 40 0 0 1 40 40 v160 h-20 v-160 a20 20 0 0 0-20-20 h-400 a20 20 0 0 0-20 20 v160 h-20 v-160 a40 40 0 0 1 40-40z"
            fill="#e6e6e6"
          />
          <rect x="350" y="380" width="100" height="10" fill={theme.text} />
          <rect x="360" y="390" width="80" height="5" fill={theme.text} />

          {/* Girl */}
          <path
            d="M300 200 c0-20 15-40 40-40 h10 c25 0 40 20 40 40 v100 h-90z"
            fill={theme.imageHighlight}
          />
          <path
            d="M330 300 c0 40 5 100 5 100 l-40 150 h30 l35-120 h25 l30 120 h30 l-40-150 c5-80 5-100 5-100z"
            fill={theme.dark}
          />
          <circle cx="345" cy="160" r="25" fill="#ffb6b6" />
          <path
            d="M330 170 q15 10 30 0"
            stroke="#000"
            strokeWidth="1"
            fill="none"
          />

          {/* Shoes */}
          <path d="M295 550 h40 v20 h-45z" fill={theme.dark} />
          <path d="M415 550 h40 v20 h-45z" fill={theme.dark} />

          {/* Plant */}
          <path
            d="M250 550 c10-20 40-30 50-10 s-10 30-20 40 -25 5-30-10z"
            fill={theme.imageHighlight}
          />
        </g>
      </svg>
    );
  }
}

export default FeelingProud;
