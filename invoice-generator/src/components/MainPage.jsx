import React from 'react'
import NameComponent from './nameComponent'

function MainPage() {
  return (
    <div className='main-container' style={{backgroundColor: '#fafafa', padding:'120px 0'}}>
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <div style={{backgroundColor: '#ffffff', width: '78%', height: '500px',  border: '1px solid rgb(231 234 243 / 70%)', padding: '20px', marginLeft: '50px'}}>
            <div></div>
            <NameComponent/>
            <h2>Harshal</h2>
          </div>
          <div style={{width: '20%', height: '100%',display: 'flex', justifyContent: 'center'}}>
            <h2>Download</h2>
          </div>
      </div>
         
    </div>
  )
}

export default MainPage