
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from "redux-persist/integration/react";// Import PersistGate
import {persistor, store} from "./Redux/store"
import App from './App';
import { Provider } from 'react-redux';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <App />
  </PersistGate>
  </Provider>
  </React.StrictMode>
);

reportWebVitals();
