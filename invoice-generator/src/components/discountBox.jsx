import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

function DiscountBox({ width, height ,value, onChange, setPercentVisible, isPercentVisible, symbol}) {
  const [isFocused, setIsFocused] = useState(false);
  // const [isPercentVisible, setPercentVisible] = useState(false);

  const containerStyle = {
    position: 'relative',
    paddingLeft: '20px',
    width: '100%',
    height: '37px', 
    border: "1px solid rgba(196, 205, 213, .7)",
    borderRadius: '5px'
  };

  const inputStyle = {
    position: 'absolute',
    // width: '49px',
    width: '50%',
    backgroundColor: "#FFFFFF",
    border: "none",
    color: "#1E2022",
    boxShadow: isFocused
      ? "rgba(140, 152, 164, 0.25) 0px 0px 16px 0px"
      : "none",
    outline: "none",
    resize: "none",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    height: '93%', 
    borderRight:"1px solid rgba(196, 205, 213, .7)",
    left:`${isPercentVisible?'2px':'31px'}`
  };


  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={containerStyle}>
 <div style={{ position: 'absolute', left:`${!isPercentVisible ? '0px':'87px'}`, height: '100%', display: 'flex', alignItems: 'center',color: 'rgb(119, 119, 119)', backgroundColor: 'white', width: '20%', justifyContent: 'center', borderRadius: '5px' }}>{!isPercentVisible?`${symbol}`:<span style={{zIndex:10}}>%</span>}</div>      
        <input
        placeholder={value}
        required
        value={value}
        style={inputStyle}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
        <button  className="btn-style" style={{ position: 'absolute', right: '0' , width: '28%', height:"100%",  border: 'none', backgroundColor: 'white', borderRadius: '5px', color: 'rgb(119, 119, 119)'}}
      onClick={()=>setPercentVisible(!isPercentVisible) }
      >
        <FontAwesomeIcon className="icon-style" icon={faArrowsRotate} style={{ marginRight: '5px' }} />
      </button>
    </div>
  );
}

export default DiscountBox;
