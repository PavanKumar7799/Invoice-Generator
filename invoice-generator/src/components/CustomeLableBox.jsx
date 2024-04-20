import React, { useState } from "react";

function CustomizeInputComp({ width, height, placeholder, textAlign, onChange, value }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // const [value, setValue] = useState(placeholder);
// console.log(value);

  const inputStyle = {
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
    border: (isFocused || isHovered) ? "1px solid rgba(196, 205, 213, .7)" : "1px solid transparent",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    color: "#777",
    boxShadow: isFocused
      ? "rgba(140, 152, 164, 0.25) 0px 0px 16px 0px"
      : "none",
    outline: "none",
    resize: "none",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    textAlign: textAlign,
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  //   if(onChange){
  //     onChange(e)
  //   }
  // }

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <input
        placeholder={placeholder}
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

export default CustomizeInputComp;
