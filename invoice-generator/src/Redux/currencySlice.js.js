// currencySlice.js
import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    selectedCurrency: 'BBD',
    currencies: [
      { code: 'AED', name: 'AED (د.إ)' },
      { code: 'AFN', name: 'AFN' },
      
    ],
  },
  reducers: {
    selectCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { selectCurrency } = currencySlice.actions;

export default currencySlice.reducer;
