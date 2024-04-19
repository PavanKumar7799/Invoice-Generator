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

            let taxValue = tax === "" || isNaN(tax) ? 0 : parseFloat(tax);
            state.shipping = shipping === "" ? 0 : parseFloat(shipping);
            let discountValue = discount === '' || isNaN(discount)? 0 : parseFloat(discount);

            console.log(discount);
            if (typeof discount === 'string' && discount.endsWith('%')) {
                console.log(discountValue);
                discountValue = parseFloat(discount) / 100;
                if(isNaN(discountValue)){
                    discountValue = 0;
                }
                console.log(discountValue);
                state.discount = discountValue * 200;
            }else{
                state.discount= discountValue
            }
            if (typeof tax === 'string' && tax.endsWith('%')) {
                taxValue = parseFloat(tax) / 100;
                console.log(taxValue);
                if(isNaN(taxValue)){
                    taxValue = 0;
                }
                console.log(state.discount);
                state.tax = (200 - state.discount) * taxValue;
                 console.log(state.tax)
            }else{
                state.tax= taxValue;
            }

            state.total = 200 - state.discount + state.tax + state.shipping;
            state.amountPaid = amountPaid === "" ? 0 : parseFloat(amountPaid);
            state.balanceDue = state.amountPaid === 0 ? state.total : state.total - state.amountPaid;
            
        }
    }
})


export const { updateCalculations } = calculationSlice.actions;
export default calculationSlice.reducer;
