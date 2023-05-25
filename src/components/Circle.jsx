import React from "react";

const Circle = ({classes}) => {
  return (
    <span className={`w-10 h-10 bg-white block absolute rounded-full -top-4 ${classes}`}></span>
  );
};

export default Circle;
