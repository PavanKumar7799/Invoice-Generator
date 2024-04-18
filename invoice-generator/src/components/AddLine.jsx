import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { updateItemName, updateQuantity, updateRate, addLineItem, removeLineItem } from '../actions/action';
import InputBox from './InputBox';
import InputBox2 from './pageCount';
import LableBox from './LabelBox';

function LineItem({ }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [rate, setRate] = useState("0");
  //   const [amt , setAmt] =useState()

  const dispatch = useDispatch();
  const lineItems = useSelector((s) => s.lineItemsReducer)

  const handleAddLineItem = () => {
    dispatch(addLineItem());
  };

  const handleRemoveLineItem = (index) => {
    dispatch(removeLineItem({index}));
  };

  const handleMouseEnter = (index) => {

    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnterButton = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveButton = () => {
    setIsHovered(false);
  };


  console.log("lineItems", lineItems);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginRight: '20px' }}>
      {/* Header row */}
      <div className='InputLables' style={{ backgroundColor: '#132144', color: 'white', display: 'flex', padding: '8px', height: '20px', borderRadius: '5px', width: '100%', paddingBottom: '14px', marginRight: '20px' }}>
        <LableBox placeholder={'Item'} width="650px" height="10px" />
        <LableBox placeholder={'Quantity'} width="100px" height="10px" />
        <LableBox placeholder={'Rate'} width="100px" height="10px" />
        <LableBox placeholder={'Amount'} width="100px" height="10px" />
      </div>

      {/* Input row */}
      {lineItems?.length ?
        lineItems?.map((item, index) => (
          <div key={index} className='InputLine' style={{ display: 'flex', justifyContent: 'space-around', height: '40px', width: '100%', marginRight: '20px' }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>

            <InputBox placeholder={'Add your Item or description of product'} width="650px" height="25px" value={item?.itemName}
              onChange={(e) => {
                let value = e.target.value;
                setName(value)
                console.log("value:", e.target.value, index);
                dispatch(updateItemName({ index, name: value }))

              }} />

            <InputBox2 type={'number'} name="quantity" placeholder={'Quantity'} width="80px" height="25px" value={item?.quantity}

              onChange={(e) => {
                let value = e.target.value;
                setQuantity(value)
                console.log("value :", value, index);
                dispatch(updateQuantity({ index, quantity: value }))
              }}
            />

            <InputBox2 type={'number'} name="rate" placeholder={'Rate'} width="80px" height="25px" value={item?.rate}

              onChange={(e) => {
                let value = e.target.value;
                setRate(value)
                console.log("value :", value, index);
                dispatch(updateRate({ index, rate: value }))
              }}
            />
            <div style={{ width: "100px", height: "25px", display: "flex", alignItems: "center", margin: '10px', marginLeft: '40px' }}>
              {item.amount} { }
              <div style={{ marginLeft: '20px' }}>
                {lineItems?.length > 1 && hoveredIndex === index && (
                  <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer', color: '009e74', alignSelf: 'center' }} onClick={() => handleRemoveLineItem(index)} />
                )}
              </div>
            </div>



          </div>
        ))
      :
      ""}

      <div style={{ padding: '0px', marginTop: '7px', marginRight: '20px' }}>
        <button style={{
          color: isHovered ? '#ffffff' : '#009e74',
          backgroundColor: isHovered ? '#009e74' : '#ffffff',
          height: '36px',
          width: '104px',
          padding: '8px',
          border: '1px solid #009e74',
          borderRadius: '5px',
          cursor: 'pointer' // Add cursor pointer on hover
        }} onClick={handleAddLineItem} onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
          Line Item
        </button>
      </div>
    </div>
  );
}
export default LineItem;
