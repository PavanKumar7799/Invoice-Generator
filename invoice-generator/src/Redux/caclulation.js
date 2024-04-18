import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    discount: 0,
    tax: 0,
    shipping: 0,
    total: 0,
    amountPaid: 0,
    balanceDue: 0,
}

const calculationSlice = createSlice({
    name: "calculation",
    initialState,
    reducers: {
        updateCalculations(state, action) {
            const { discount, tax, shipping, amountPaid } = action.payload;

            state.discount = parseFloat(discount);
            state.tax = parseFloat(tax);
            state.shipping = parseFloat(shipping);

            // Calculate the total
            state.total = 100 - state.discount + state.tax + state.shipping;

            state.amountPaid = amountPaid === "" ? 0 : parseFloat(amountPaid);

            state.balanceDue = state.amountPaid === 0 ? state.total : state.total - state.amountPaid;
        }
    }
})

export const { updateCalculations } = calculationSlice.actions;
export default calculationSlice.reducer;
