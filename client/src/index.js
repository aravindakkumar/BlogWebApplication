import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux"
import reducer from "./reducers/index.js"
import {Provider} from "react-redux"
import thunk from "redux-thunk"

let store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);


