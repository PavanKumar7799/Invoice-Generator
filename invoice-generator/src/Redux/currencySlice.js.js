import { createSlice } from '@reduxjs/toolkit';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    selectedCurrency: 'BBD',
    Symbol: '$',
  },

  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
      // state.Symbol  = action.payload;
    },
    setSymbol: (state, action)=>{
      state.Symbol = action.payload
    }
  },
});

export const { setCurrency, setSymbol } = currencySlice.actions;

export default currencySlice.reducer;
