import React from "react";

const Button = ({ children }) => {
  return (
    <button className="inline-flex items-center gap-2 bg-black text-[#f10000] border border-[#f10000] px-5 py-2 rounded-md transition duration-300 cursor-pointer hover:bg-[#f10000] hover:text-black">
      {children}
    </button>


  );
};

export default Button;

