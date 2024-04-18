import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    currency: 0,
}

const currencySlice = createSlice({
    name: "updateCurrency",
    initialState,
    reducers: {
        updateCalculations(state, action) {
            const {  currency } = action.payload;

            state.currency = parseFloat(currency);

        }
    }
})

export const { updateCalculations } = currencySlice.actions;
export default currencySlice.reducer;