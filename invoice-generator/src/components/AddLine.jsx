import React, { useReducer } from 'react';
import InputBox from './InputBox';
import LableBox from './LabelBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import InputBox2 from './pageCount';

const UPDATE_ITEM_NAME = 'UPDATE_ITEM_NAME';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const UPDATE_RATE = 'UPDATE_RATE';
const ADD_LINE_ITEM = 'ADD_LINE_ITEM';
const REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ITEM_NAME:
            return { ...state, lineItems: state.lineItems.map((item, idx) => idx === action.index ? { ...item, itemName: action.payload } : item) };
        case UPDATE_QUANTITY:
            return {
                ...state,
                lineItems: state.lineItems.map((item, idx) => idx === action.index ? { ...item, quantity: action.payload, amount: (action.payload * item.rate).toFixed(2) } : item)
            };
        case UPDATE_RATE:
            return {
                ...state,
                lineItems: state.lineItems.map((item, idx) => idx === action.index ? { ...item, rate: action.payload, amount: (item.quantity * action.payload).toFixed(2) } : item)
            };
        case ADD_LINE_ITEM:
            return {
                ...state,
                lineItems: [...state.lineItems, { itemName: '', quantity: '1', rate: '0', amount: '0.00' }]
            };
        case REMOVE_LINE_ITEM:
            return {
                ...state,
                lineItems: state.lineItems.filter((item, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

function LineItem() {
    const initialState = {
        lineItems: [{ itemName: '', quantity: '1', rate: '0', amount: '0.0' }]
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddLineItem = () => {
        dispatch({ type: ADD_LINE_ITEM });
    };

    const handleRemoveLineItem = (index) => {
        dispatch({ type: REMOVE_LINE_ITEM, payload: index });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {/* Header row */}
            <div className='InputLables' style={{ backgroundColor: '#132144', color: 'white', display: 'flex', padding: '8px', height: '20px', borderRadius: '5px', width: '100%', paddingBottom: '14px' }}>
                <LableBox placeholder={'Item'} width="800px" height="10px" />
                <LableBox placeholder={'Quantity'} width="100px" height="10px" />
                <LableBox placeholder={'Rate'} width= "100px" height="10px" />
                <LableBox placeholder={'Amount'} width="100px" height="10px" />
            </div>

            {/* Input row */}
            {state.lineItems.map((item, index) => (
                <div key={index} className='InputLine' style={{ display: 'flex', justifyContent: 'space-between', height: '40px', width: '100%' }}>
                    <InputBox placeholder={'Add your Item or description of product'} width="800px" height="25px" value={item.itemName} onChange={(value) => dispatch({ type: UPDATE_ITEM_NAME, payload: value, index })} />
                    <InputBox2 type={'number'} placeholder={'Quantity'} width="80px" height="25px" value={item.quantity} onChange={(value) => dispatch({ type: UPDATE_QUANTITY, payload: value, index })} />
                    <InputBox2 type={'number'} placeholder={'Rate'} width="80px" height="25px" value={item.rate} onChange={(value) => dispatch({ type: UPDATE_RATE, payload: value, index })} />
                    <div style={{ width: "100px", height: "25px", display: "flex", alignItems: "center" }}>
                        {item.amount}
                    </div>
                    {state.lineItems.length > 1 && index !== state.lineItems.length - 1 && (
                        <FontAwesomeIcon icon={faTimes} style={{ cursor: 'pointer', color: 'red', alignSelf: 'center' }} onClick={() => handleRemoveLineItem(index)} />
                    )}
                </div>
            ))}

            <div style={{ padding: '0px', marginTop: '7px' }}>
                <button style={{ color: '#009e74', height: '36px', width: '104px', backgroundColor: '#ffff', padding: '8px', border: '1px solid #009e74', borderRadius: '5px' }} onClick={handleAddLineItem}>
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                    Line Item
                </button>
            </div>
        </div>
    );
}

export default LineItem;