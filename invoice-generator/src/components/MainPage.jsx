import React, { useState } from 'react'
import InputBox from './InputBox'
import CustomeLableBox from './CustomeLableBox'
import InvoiceName from './invoicename'
import PageCount from './pageCount'
import PDFGenerator from './PDFGenerator'
import LogoBox from './LogoBox'
import DateInput from './DatePicker'
import Currency from './Currency'
import LineItem from './AddLine'
import DatePicker from './DatePicker'


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
          <div style={{backgroundColor: '#ffffff', width: '74%', height: '100%',  border: '1px solid rgb(231 234 243 / 70%)', padding: '20px', marginLeft: '50px'}}>
            <div>
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <LogoBox onImageChange={handleImageChange}/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end', paddingRight: '40px'}}>
              <InvoiceName width='250px' height='auto'/>
              <PageCount width='150px' height='auto'/>
            </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            
            <div style={{marginTop: '20px', display: 'flex',  gap: '30px', flexDirection: 'column'}}>
              <InputBox width="400px" height="50px"/>
              
              <div style={{display: 'flex', flexDirection: 'row', gap: '10px', width: "125%"}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginRight: '15px', width: "100%"}}>
              <CustomeLableBox width="100%" height='18px' placeholder='Ship To' textAlign='left' />
                <InputBox width='100%' height='40px'/>
              </div>

              <div style={{display: 'flex', flexDirection: 'column',  gap: '5px', marginLeft: '15px', width: "100%"}}>
              <CustomeLableBox width="100%" height='18px' placeholder='Bill To' textAlign='left' />
                <InputBox width='100%' height='40px'/>
              </div>
              </div>
            </div>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px', gap: '5px', marginRight: '40px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                    <CustomeLableBox width='200px' height='18px' placeholder='Date' textAlign='right' />
                    <CustomeLableBox width='200px' height='18px' placeholder='Payment Terms' textAlign='right' />
                    <CustomeLableBox width='200px' height='18px' placeholder='Due Date' textAlign='right' />
                    <CustomeLableBox width='200px' height='18px' placeholder='PO Number' textAlign='right' />
                    </div>
                    <div>
                    <DatePicker width='125px' height='18px' />
                    <DatePicker width='125px' height='18px' />
                    <DatePicker width='125px' height='18px' />
                    <DatePicker width='125px' height='18px' />
                    </div>
              </div>
            </div>
            </div>
            <div style={{marginTop: '30px'}}>

          <LineItem  />
            </div>
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