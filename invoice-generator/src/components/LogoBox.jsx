import React, { useState } from 'react';

function LogoBox({ onImageChange, imageUrl: propImg }) {
  const [imageUrl, setImageUrl] = useState(propImg);
console.log(imageUrl);
  const handleChange = (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      const imageUrl = URL.createObjectURL(file); // Convert image data to URL
      setImageUrl(imageUrl); 
      onImageChange(imageUrl); // Pass URL to parent component
    }; 
    if (file) {
      reader.readAsDataURL(file);
    }
  };
console.log(imageUrl);
  return (
    <label className='LogoBox' style={{backgroundColor:'#fafafa', padding: '0.12px 0.12px', height: '130px', width: '199.9px', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
      <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
      {imageUrl && <img src={imageUrl} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />} 
      {!imageUrl && <span style={{ color: 'rgb(103, 119, 136)' }}>+ Add Your Logo</span>}
    </label>
  );
}

export default LogoBox;
