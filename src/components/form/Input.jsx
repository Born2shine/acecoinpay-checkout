import React from "react";

const Input = ({type, placeholder, classes}) => {
  return (
    <input
      type={type || "text"}
      className={`p-3 border rounded-lg w-full font-medium focus:outline-none focus:border-isPrimary5 focus:border-2 placeholder:pl focus:bg-isPrimary10 text-sm text-center ${classes}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
