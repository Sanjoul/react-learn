import React from "react";

export const LearnInlineCSS = () => {
  const btnStyle = {
    color: "blue",
    backgroundColor: "orange",
  };
  return (
    <>
      <p style={{ fontSize: "40px", color: "red" }}>
        Hello React + Vite + Sanjoul
      </p>
      <button style={btnStyle}> Button 1 </button>
      <button style={{ ...btnStyle, ...{ fontSize: "25px" } }}>Button 2</button>
    </>
  );
};
