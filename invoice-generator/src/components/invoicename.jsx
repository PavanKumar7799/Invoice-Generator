import React, { useState } from "react";

function InvoiceName({width, height, onChange, value, placeholder}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const [value, setValue] = useState("INVOICE");


  const inputStyle = {
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
    border: (isFocused || isHovered )?  "1px solid rgba(196, 205, 213, .7)" : "1px solid transparent",
    borderRadius: "8px",
    fontSize: "40px",
    boxShadow: isFocused
      ? "rgba(140, 152, 164, 0.25) 0px 0px 16px 0px"
      : "none",
    outline: "none",
    resize: "none",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    textAlign: "right",
    padding: '0px 15px',
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    
  };

  return (
    <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <input
        placeholder={value}
        required
        value={value}
        style={inputStyle}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default InvoiceName;
