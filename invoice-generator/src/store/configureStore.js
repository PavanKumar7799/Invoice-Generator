// // configureStore.js
// import rootReducer from '../actions/rootReducers';
// import {legacy_createStore as createStore} from 'redux';
// const store = createStore( rootReducer);

// export default store;
import {legacy_createStore as createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from '../actions/rootReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
