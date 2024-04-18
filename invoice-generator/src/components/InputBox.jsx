import React, { useState } from "react";

function InputBox({width, height, placeholder, onChange, value}) {
  const [isFocused, setIsFocused] = useState(false);

  const textareaStyle = {
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(196, 205, 213, .7)",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    color: "#1E2022",
    boxShadow: isFocused
      ? "rgba(140, 152, 164, 0.25) 0px 0px 16px 0px"
      : "none",
    outline: "none",
    resize: "none",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <textarea
       placeholder={placeholder}
        required
        style={textareaStyle}
        onFocus={handleFocus}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default InputBox;
