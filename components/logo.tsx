import React from "react";

const Logo = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="sc-dYOLZc bEWcsA"
    >
      <defs>
        <linearGradient id="linkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B365D"></stop>
          <stop offset="50%" stop-color="#00D4FF"></stop>
          <stop offset="100%" stop-color="#7B68EE"></stop>
        </linearGradient>
      </defs>
      <path
        d="M18 4 L24 7 L24 13 L18 16 L12 13 L12 7 Z"
        fill="url(#linkGradient)"
        stroke="#fff"
        stroke-width="1"
        opacity="0.9"
      ></path>
      <path
        d="M8 20 L14 23 L14 29 L8 32 L2 29 L2 23 Z"
        fill="url(#linkGradient)"
        stroke="#fff"
        stroke-width="1"
        opacity="0.8"
      ></path>
      <path
        d="M28 20 L34 23 L34 29 L28 32 L22 29 L22 23 Z"
        fill="url(#linkGradient)"
        stroke="#fff"
        stroke-width="1"
        opacity="0.8"
      ></path>
      <line
        x1="15"
        y1="13"
        x2="11"
        y2="23"
        stroke="#00D4FF"
        stroke-width="2"
        opacity="0.6"
      ></line>
      <line
        x1="21"
        y1="13"
        x2="25"
        y2="23"
        stroke="#00D4FF"
        stroke-width="2"
        opacity="0.6"
      ></line>
      <line
        x1="14"
        y1="26"
        x2="22"
        y2="26"
        stroke="#00D4FF"
        stroke-width="2"
        opacity="0.6"
      ></line>
      <circle cx="18" cy="22" r="2" fill="#7B68EE"></circle>
    </svg>
  );
};

export default Logo;
