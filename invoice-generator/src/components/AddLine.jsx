import React, { useReducer } from 'react';
import InputBox from './InputBox'; // Import your custom InputBox component
import CustomizeInputComp from './CustomeLableBox';
import LableBox from './LabelBox';

// Action types
const UPDATE_ITEM_NAME = 'UPDATE_ITEM_NAME';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const UPDATE_RATE = 'UPDATE_RATE';
const UPDATE_AMOUNT = 'UPDATE_AMOUNT';
const ADD_LINE_ITEM = 'ADD_LINE_ITEM';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ITEM_NAME:
            return { ...state, itemName: action.payload };
        case UPDATE_QUANTITY:
            return { ...state, quantity: action.payload };
        case UPDATE_RATE:
            return { ...state, rate: action.payload };
        case UPDATE_AMOUNT:
            return { ...state, amount: action.payload };
        case ADD_LINE_ITEM:
            // Add logic to handle adding a new line item
            return state;
        default:
            return state;
    }
};

function LineItem() {
    const initialState = {
        itemName: '',
        quantity: '',
        rate: '',
        amount: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleAddLineItem = () => {
        dispatch({ type: ADD_LINE_ITEM });
    };

    return (
        <div>
            {/* Header row */}
            <div style={{ backgroundColor: '#132144', color: 'white', display: 'flex', padding: '8px', height: '20px' , borderRadius:'5px'}}>
                <LableBox placeholder={'Item'} width="800px" height="6px" />
                <LableBox placeholder={'Quantity'} width="100px" height="6px" />
                <LableBox placeholder={'Rate'} width="100px" height="6px" />
                <LableBox placeholder={'Amount'} width="100px" height="6px" />
            </div>

            {/* Input row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', height:'40px' }}>
                <InputBox placeholder={'Add your Item or decription of product'} width="800px" height="30px" value={state.itemName} onChange={(value) => dispatch({ type: UPDATE_ITEM_NAME, payload: value })} />
                <InputBox placeholder={'Quantity'} width="80px" height="30px" value={state.quantity} onChange={(value) => dispatch({ type: UPDATE_QUANTITY, payload: value })} />
                <InputBox placeholder={'Rate'} width="80px" height="30px" value={state.rate} onChange={(value) => dispatch({ type: UPDATE_RATE, payload: value })} />
                <InputBox width="100px" height="30px" value={'$'+state.amount} onChange={(value) => dispatch({ type: UPDATE_AMOUNT, payload: value })} />
                {/* <button onClick={handleAddLineItem}>+</button> */}
            </div>
            <div style={{  padding: '10px', marginTop:'15px' }}>
                <button style={{ backgroundColor: '#C4E4C0', padding: '8px', border: 'none' }} onClick={handleAddLineItem}> + Add Items</button>
            </div>
        </div>
    );
}

export default LineItem;
