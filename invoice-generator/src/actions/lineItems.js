
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    lineItems: [
        { itemName: '', quantity: '1', rate: '0', amount: '0.0' }
    ],
};


const lineItemsSlice = createSlice({
  name: 'lineItemsArray',
  initialState,
  reducers: {
    updateItemName(state, action) {
      const { index, name } = action.payload;
      state.lineItems[index].itemName = name;
    },
    updateQuantity(state, action) {
      const { index, quantity } = action.payload;
      const item = state.lineItems[index];
      item.quantity = quantity;
      item.amount = (parseFloat(quantity) * parseFloat(item.rate)).toFixed(2);
    },
    updateRate(state, action) {
      const { index, rate } = action.payload;
      const item = state.lineItems[index];
      item.rate = rate;
      item.amount = (parseFloat(rate) * parseFloat(item.quantity)).toFixed(2);
    },
    addLineItem(state) {
      state.lineItems.push({ itemName: '', quantity: '1', rate: '0', amount: '0.00' });
    },
    removeLineItem(state, action) {
      state.lineItems.splice(action.payload.index, 1);
    },
  },
});

export const selectSubtotal = state =>
  state.lineItems.lineItems.reduce((total, item) => total + parseFloat(item.amount), 0).toFixed(2);

export const { updateItemName, updateQuantity, updateRate, addLineItem, removeLineItem } = lineItemsSlice.actions;
export default lineItemsSlice.reducer;

