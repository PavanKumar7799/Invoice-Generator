import React, { useState } from "react";
import { Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';


function PageCount2({width, height, textAlign, Symbol, onChange, value }) {
  const [isFocused, setIsFocused] = useState(false);

  
  const inputStyle = {
    width: width,
    height: height, 
    backgroundColor: '#ffffff',
    border: "1px solid rgba(196, 205, 213, .7)",
    borderRadius: '5px',
    padding: '10px', 
    fontSize: '16px', 
    fontFamily: 'Inter, sans-serif', 
    color: 'rgb(119, 119, 119)', 
    boxShadow: isFocused ? 'rgba(140, 152, 164, 0.25) 0px 0px 16px 0px' : 'none',
    textAlign: textAlign,
    outline : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    resize:'none',
    marginBottom: '4px',
    position: 'absoulte'
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div style={{position:'relative'}}>
    <div style={{position:'absolute', height: '100%', width: '20%', display: 'flex', justifyContent: 'center', paddingTop: '10px', color: '#8f949d', fontSize: '17px', fontWeight: '500', paddingRight:'10px'}}>{Symbol}</div>
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

export default PageCount2;
