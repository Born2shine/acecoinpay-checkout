import React from "react";

const Ripple = ({classes}) => {
  return (
    <div className={`w-52 h-52 border border-gray-50 rounded-full absolute -bottom-24 -z-10 ${classes}`}></div>
  );
};

export default Ripple;
