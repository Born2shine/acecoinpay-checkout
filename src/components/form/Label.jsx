import React from "react";

const Label = ({title, subtext}) => {
  return (
    <div>
      <label className="text-isDark font-semibold text-sm" htmlFor="card-number">
        {title}
      </label>
      <p className="text-isGray5 font-thin text-xs mt-1">
        {subtext}
      </p>
    </div>
  );
};

export default Label;
