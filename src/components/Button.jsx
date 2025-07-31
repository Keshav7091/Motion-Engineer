import React from "react";

const Button = ({ children }) => {
  return (
    <button className="inline-flex items-center gap-2 bg-black text-danger border border-danger px-5 py-2 rounded-md hover:bg-[#f10000] hover:text-black transition duration-300 cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
