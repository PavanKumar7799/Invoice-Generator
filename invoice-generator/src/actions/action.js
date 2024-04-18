// actions.js
 
export const updateItemName = (payload)=>{
    return {
        type:'UPDATE_ITEM_NAME',
        payload
}};
export const updateQuantity = (payload)=>{
    return {
        type:'UPDATE_QUANTITY',
         payload
}};
export const updateRate = (payload)=>{
    return {
        type:'UPDATE_RATE',
         payload
}};
export const addLineItem = ()=>{
    return {
        type:'ADD_LINE_ITEM',
         
}};
export const removeLineItem = (payload)=>{
    return {
        type:'REMOVE_LINE_ITEM',
        payload
}};
export const updateSubtotal = (subtotal) => {
    return {
        type: 'UPDATE_SUBTOTAL',
        payload: subtotal
    };
};

