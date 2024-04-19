import { configureStore, combineReducers  } from "@reduxjs/toolkit";
import Calculation from "./caclulation"; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import currencySlice from "./currencySlice.js";
import lineItems from "../actions/lineItems.js"

const persistConfig = {
    key: "root",
    storage,
}

const rootReducer = combineReducers({
    calculation: Calculation,
    currency: currencySlice, 
    lineItems: lineItems// Add currencySlice reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
