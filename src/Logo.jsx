import React from "react";

const Logo = () => (
  <div style={{ position: "absolute", top: "30px", left: "50px" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="62"
      viewBox="0 0 622 62"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        font-size="60"
        transform="translate(-9 -11)"
      >
        <text fill="#FF877C" font-family="AndaleMono, Andale Mono">
          <tspan x="0" y="54">
            random{" "}
          </tspan>{" "}
          <tspan
            x="252.041"
            y="54"
            font-family="AppleColorEmoji, Apple Color Emoji"
          >
            {" "}
          </tspan>{" "}
          <tspan x="312.041" y="54">
            generator
          </tspan>
        </text>
        <text fill="#4A4A4A" font-family="AppleColorEmoji, Apple Color Emoji">
          <tspan x="233" y="67" aria-label="Cat">
            🐱
          </tspan>
        </text>
      </g>
    </svg>
  </div>
);

export default Logo;
