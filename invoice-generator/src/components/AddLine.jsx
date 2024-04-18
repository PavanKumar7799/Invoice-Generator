// import React, { useState, useReducer } from 'react';
// import InputBox from './InputBox';
// import LableBox from './LabelBox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
// import InputBox2 from './pageCount';

// const UPDATE_ITEM_NAME = 'UPDATE_ITEM_NAME';
// const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
// const UPDATE_RATE = 'UPDATE_RATE';
// const ADD_LINE_ITEM = 'ADD_LINE_ITEM';
// const REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';

// const reducer = (state, action) => {
//     switch (action.type) {
//         case UPDATE_ITEM_NAME:
//             return {
//                 ...state,
//                 lineItems: state.lineItems.map((item, idx) =>
//                     idx === action.index ? { ...item, itemName: action.payload } : item
//                 )
//             };
//         case UPDATE_QUANTITY:
//             const newQuantity = parseFloat(action.payload);
//             const newAmountQuantity = (newQuantity * parseFloat(state.lineItems[action.index].rate)).toFixed(2);
//             return {
//                 ...state,
//                 lineItems: state.lineItems.map((item, idx) =>
//                     idx === action.index ?
//                         {
//                             ...item,
//                             quantity: action.payload,
//                             amount: newAmountQuantity 
//                         } :
//                         item
//                 )
//             };

//         case UPDATE_RATE:
//             const newRate = parseFloat(action.payload);
//             const newAmountRate = (parseFloat(state.lineItems[action.index].quantity) * newRate).toFixed(2);
//             return {
//                 ...state,
//                 lineItems: state.lineItems.map((item, idx) =>
//                     idx === action.index ?
//                         {
//                             ...item,
//                             rate: action.payload,
//                             amount: newAmountRate // Update the amount based on the new rate
//                         } :
//                         item
//                 )
//             };
//         case ADD_LINE_ITEM:
//             return {
//                 ...state,
//                 lineItems: [...state.lineItems, { itemName: '', quantity: '1', rate: '0', amount: '0.00' }]
//             };
//         case REMOVE_LINE_ITEM:
//             return {
//                 ...state,
//                 lineItems: state.lineItems.filter((item, index) => index !== action.payload)
//             };
//         default:
//             return state;
//     }
// };

// function LineItem() {
//     const initialState = {
//         lineItems: [{ itemName: '', quantity: '45541', rate: '110', amount: '0.0' }]
//     };

//     const [state, dispatch] = useReducer(reducer, initialState);
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const handleAddLineItem = () => {
//         dispatch({ type: ADD_LINE_ITEM });
//     };

//     const handleRemoveLineItem = (index) => {
//         console.log(index);
//         dispatch({ type: REMOVE_LINE_ITEM, payload: index });
//     };


//     const handleMouseEnter = (index) => {
//         setHoveredIndex(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredIndex(null);
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginRight: '20px' }}>
//             {/* Header row */}
//             <div className='InputLables' style={{ backgroundColor: '#132144', color: 'white', display: 'flex', padding: '8px', height: '20px', borderRadius: '5px', width: '100%', paddingBottom: '14px', marginRight: '20px' }}>
//                 <LableBox placeholder={'Item'} width="650px" height="10px" />
//                 <LableBox placeholder={'Quantity'} width="100px" height="10px" />
//                 <LableBox placeholder={'Rate'} width="100px" height="10px" />
//                 <LableBox placeholder={'Amount'} width="100px" height="10px" />
//             </div>

//             {/* Input row */}
//             {state.lineItems.map((item, index) => {
//     console.log('item:', item);
//     console.log('initialState.lineItems[0]:', initialState.lineItems[0]);
//     return (
//         <div key={index} className='InputLine' style={{ display: 'flex', justifyContent: 'space-around', height: '40px', width: '100%', marginRight: '20px' }}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}>
//             <InputBox placeholder={'Add your Item or description of product'} width="650px" height="25px" value={item.itemName !== '' ? item.itemName : initialState.lineItems[0].itemName} onChange={(value) => dispatch({ type: UPDATE_ITEM_NAME, payload: value, index })} />
//             <InputBox2 type={'number'} placeholder={'Quantity'} width="80px" height="25px" value={item.quantity !== '' ? item.quantity : initialState.lineItems[0].quantity} onChange={(value) => dispatch({ type: UPDATE_QUANTITY, payload: value, index })} />
//             <InputBox2 type={'number'} placeholder={'Rate'} width="80px" height="25px" value={item.rate !== '' ? item.rate : initialState.lineItems[0].rate} onChange={(value) => dispatch({ type: UPDATE_RATE, payload: value, index })} />
//             <div style={{ width: "100px", height: "25px", display: "flex", alignItems: "center", margin: '10px', marginLeft: '40px' }}>
//                 {item.amount !== '' ? item.amount : initialState.lineItems[0].amount} { }
//             </div>
//             {state.lineItems.length > 1 && hoveredIndex === index && (
//                 <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer', color: 'red', alignSelf: 'center' }} onClick={() => handleRemoveLineItem(index)} />
//             )}
//         </div>
//     );
// })}



//             <div style={{ padding: '0px', marginTop: '7px', marginRight: '20px' }}>
//                 <button style={{ color: '#009e74', height: '36px', width: '104px', backgroundColor: '#ffff', padding: '8px', border: '1px solid #009e74', borderRadius: '5px' }} onClick={handleAddLineItem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                     <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
//                     Line Item
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default LineItem;
// LineItem.js
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
const lineItems = useSelector((s)=>s.lineItems)

  const handleAddLineItem = () => {
    dispatch(addLineItem());
  };

  const handleRemoveLineItem = (index) => {
    dispatch(removeLineItem(index));
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
      {lineItems.map((item, index) => (
        <div key={index} className='InputLine' style={{ display: 'flex', justifyContent: 'space-around', height: '40px', width: '100%', marginRight: '20px' }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}>

         <InputBox placeholder={'Add your Item or description of product'} width="650px" height="25px" value={item?.itemName}
          onChange={(e) => {
            let value = e.target.value;
            setName(value)
            console.log("value:", e.target.value, index);
            dispatch(updateItemName({index,name:value}))

        }} />

          <InputBox2 type={'number'} name="quantity" placeholder={'Quantity'} width="80px" height="25px" value={item?.quantity}
           
           onChange={(e) => {
            let value = e.target.value;
            setQuantity(value)
            console.log("value :", value, index);
           dispatch(updateQuantity({index, quantity:value})) 
           }}
           />
          {/* <InputBox2 type={'number'} name="quantity" placeholder={'Quantity'} width="80px" height="25px" value={item.quantity}
           onChange={(value) => updateQuantity(index, value)} /> */}

<InputBox2 type={'number'} name="rate" placeholder={'Rate'} width="80px" height="25px" value={item?.rate}
           
           onChange={(e) => {
            let value = e.target.value;
            setRate(value)
            console.log("value :", value, index);
           dispatch(updateRate({index, rate:value})) 
           }}
           />
          {/* <InputBox2 type={'number'} name="rate" placeholder={'Rate'} width="80px" height="25px" value={item.rate} 
          onChange={(value) => updateRate(index, value)} /> */}
          <div style={{ width: "100px", height: "25px", display: "flex", alignItems: "center", margin: '10px', marginLeft: '40px' }}>
            {item.amount} { }
          </div>
          {lineItems.length > 1 && hoveredIndex === index && (
            <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer', color: 'red', alignSelf: 'center' }} onClick={() => handleRemoveLineItem(index)} />
          )}
        </div>
      ))}

      <div style={{ padding: '0px', marginTop: '7px', marginRight: '20px' }}>
        <button   style={{
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
