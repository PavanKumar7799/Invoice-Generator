import { combineReducers } from 'redux';
import lineItemsReducer from './lineItems';

const rootReducer = combineReducers({
  lineItems: lineItemsReducer,
});

export default rootReducer;
