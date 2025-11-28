"use client";

const Button = ({ children, className, onClick, type = "button" }) => (
  <button
    type={type}
    className={`bg-[#fe6a3a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#ff784c] shadow-lg ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
