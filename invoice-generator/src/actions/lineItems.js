const initialState = [
    { itemName: 'default', quantity: '1', rate: '0', amount: '0.0' }
]

const lineItems = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_ITEM_NAME":
            console.log("action:", action);
            return state.map((item, index) => {
                // Assuming you want to update the itemName of the item at the specified index
                if (index === action.payload.index) {
                    // Update the itemName for the item at the specified index
                    return { ...item, itemName: action.payload.name };
                }
                // For other items, return them unchanged
                return item;
            });
        // case "UPDATE_QUANTITY":
        //     console.log("action444:", action);
        //     return state.map((item, index) => {
        //         // Assuming you want to update the itemName of the item at the specified index
        //         if (index === action.payload.index) {
        //             // Update the itemName for the item at the specified index
        //             return { ...item, quantity: action.payload.quantity };
        //         }
        //         // For other items, return them unchanged
        //         return item;
        //     });
        case "UPDATE_QUANTITY":
            // Update the quantity and calculate the amount
            return state.map((item, index) =>
                index === action.payload.index ? {
                    ...item,
                    quantity: action.payload.quantity,
                    amount: (parseFloat(action.payload.quantity) * parseFloat(item.rate)).toFixed(2)
                } : item
            );

        // case "UPDATE_RATE":
        //     console.log("action:", action);
        //     return state.map((item, index) => {
        //         // Assuming you want to update the itemName of the item at the specified index
        //         if (index === action.payload.index) {
        //             // Update the itemName for the item at the specified index
        //             return { ...item, rate: action.payload.rate };
        //         }
        //         // For other items, return them unchanged
        //         return item;
        //     });
        case "UPDATE_RATE":
            // Update the rate and calculate the amount
            return state.map((item, index) =>
                index === action.payload.index ? {
                    ...item,
                    rate: action.payload.rate,
                    amount: (parseFloat(action.payload.rate) * parseFloat(item.quantity)).toFixed(2)
                } : item
            );

        case "ADD_LINE_ITEM":
            return [...state, { itemName: '', quantity: '1', rate: '0', amount: '0.00' }];

        case "REMOVE_LINE_ITEM":
            return state.filter((item, index) => index !== action.payload);

        // case "ADD_LINE_ITEM":
        //     console.log("action-",action);
        //     return {  ...state,
        //         lineItems: [...state.lineItems, { itemName: '', quantity: '1', rate: '0', amount: '0.00' }]
        //     };
        // case "REMOVE_LINE_ITEM":
        //     return {
        //         ...state,
        //         lineItems: state.lineItems.filter((item, index) => index !== action.payload.index)
        //     };



        default: return state;
    }
}

export default lineItems;