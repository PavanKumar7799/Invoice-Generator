import React, { useState } from 'react'
import InputBox from './InputBox'
import CustomizeInputComp from './CustomeLableBox'
import InvoiceName from './invoicename'
import PageCount from './pageCount'
import PDFGenerator from './PDFGenerator'
import LogoBox from './LogoBox'
import DateInput from './DatePicker'
import Currency from './Currency'
import LineItem from './AddLine'


function MainPage() {

  const handleImageChange = (imageData) => {
    console.log('Image data:', imageData);
    // Handle image data here
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='main-container' style={{backgroundColor: '#fafafa', padding:'120px 0'}}>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <div style={{backgroundColor: '#ffffff', width: '78%', height: '500px',  border: '1px solid rgb(231 234 243 / 70%)', padding: '20px', marginLeft: '50px'}}>
            <div></div>

            
          <LineItem  />
          </div>
         

          <div style={{width: '20%', height: '100%', justifyContent: 'center', marginLeft:'30px'}}>
            <PDFGenerator />
            <div style={{marginTop:"30px"}}>
            <Currency />
          </div>
          </div>
      </div>
         
    </div>
  )
}

export default MainPage