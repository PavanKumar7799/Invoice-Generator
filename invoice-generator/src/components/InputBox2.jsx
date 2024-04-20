import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

function InputBox2({width, height, textAlign, onChange, value, name }) {
  const [isFocused, setIsFocused] = useState(false);
  const {symbol} = useSelector((state)=>state.currency)
// console.log(symbol);
  const inputStyle = {
    width: width,
    height: height,
    border: "1px solid rgba(196, 205, 213, .7)",
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: "#FFFFFF",
    color: "#1E2022",
    boxShadow: isFocused ? 'rgba(140, 152, 164, 0.25) 0px 0px 16px 0px' : 'none',
    transition: 'box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out',
    textAlign: textAlign,
    outline : 'none',
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    resize:'none',
    marginBottom: '4px',
    
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  // const handleChange=(e)=>{
  //     setValue(e.target.value);
  // }
  return (
    <div >
    <input
      placeholder={value}
      required
      name={name}
      value={value}
      style={inputStyle}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  </div>
  );
}
export default InputBox2;