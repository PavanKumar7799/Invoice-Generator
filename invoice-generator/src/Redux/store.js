import { configureStore } from "@reduxjs/toolkit";
import Calculation from "./caclulation"; 
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, Calculation);

export const store = configureStore({
    reducer: {
        calculation: persistedReducer,
    },
})

export const persistor = persistStore(store);
