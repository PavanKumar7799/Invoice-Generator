import React, { useState } from 'react';

function LogoBox({ onImageChange }) { // its need work for background color of this box
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setImageUrl(imageData); 
      onImageChange(imageData);
    }; 
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <label className='LogoBox' style={{ padding: '0.12px 0.12px', height: '130px', width: '199.9px', border: '1px solid #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <input type="file" accept="image/*" onChange={handleChange} style={{ display: 'none' }} />
      {imageUrl && <img src={imageUrl} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />} 
      {!imageUrl && <span style={{ color: 'rgb(103, 119, 136)' }}>+ Add Your Logo</span>}
    </label>
  );
}

export default LogoBox;
