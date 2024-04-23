import React, { useState } from "react";
import { Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


function SymbolInputBox({width, height, textAlign, Symbol, onChange, value, inputWidth='76%' }) {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    position: 'relative',
    paddingLeft: '20px',
    width: width,
    height: height, 
    borderRadius: '5px',
    border: "1px solid rgba(196, 205, 213, .7)",
  }
  
  const inputStyle = {
    
    position: 'absolute',
    width:inputWidth,
    backgroundColor: "#FFFFFF",
    border:'none',
    color: "#1E2022",
    boxShadow: isFocused
      ? "rgba(140, 152, 164, 0.25) 0px 0px 16px 0px"
      : "none",
    outline: "none",
    height: '94%',
    left:'31px',
    textAlign: textAlign,
    borderRadius: '0px 5px 5px 0px',
    paddingLeft: '5px'
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div style={containerStyle}>
    <div style={{ position: 'absolute', left: '0', height: '100%', display: 'flex', alignItems: 'center',color: 'rgb(119, 119, 119)', backgroundColor: 'white', width: '20%', justifyContent: 'center', borderRadius: '5px', fontSize: '15px' }}>{Symbol}</div>
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

export default SymbolInputBox;
