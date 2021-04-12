import React from "react";
import "./Logo.scss";

const Logo = (props) => {
  return (
    <div>
      <div className="e-letter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="orbit"
        >
          <circle
            fill="none"
            stroke="#652A7A"
            strokeWidth="5"
            cx="50"
            cy="50 "
            r="40"
          />
          <circle fill="#652A7A" cx="50" cy="50" r="24" />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            width="34"
            textAnchor="middle"
            fill="#fff"
          >
            P
          </text>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          id="electron"
        >
          <circle fill="#652A7A" cx="10" cy="90" r="10" />
        </svg>
      </div>
    </div>
  );
};

export default Logo;
