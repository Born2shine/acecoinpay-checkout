import React from "react";

const SingleTimeCounter = ({value}) => {
  return (
    <span className="font-medium bg-isDark w-5 h-7 grid place-content-center text-isWhite5 rounded-[4px] text-sm">{value}</span>
  );
};

export default SingleTimeCounter;
