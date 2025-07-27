import React from "react";

const Button = ({ children }) => {
  return (
    <button className="inline-flex items-center gap-2 bg-black text-[#e5f964] border border-[#e5f964] px-5 py-2 rounded-md hover:bg-[#e5f964] hover:text-black transition duration-300">
      {children}
    </button>
  );
};

export default Button;
