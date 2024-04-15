import React, { useState } from "react";
// import {Icon} from 'semantic-ui-react'

function PageCount({width, height}) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("1");


  const inputStyle = {
    width: width,
    height: height,
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(196, 205, 213, .7)",
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
    textAlign: "right",
    boxSizing: "border-box"
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange=(e)=>{
      setValue(e.target.value);
  }

  return (
    <div >
      <input
        placeholder={value}
        required
        value={value}
        style={inputStyle}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
          
    </div>
  );
}

export default PageCount;
