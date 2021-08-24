import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import categoriesReducer from './store/categories';
import productsReducer from './store/products';

const reducers = combineReducers({ categories: categoriesReducer, products:productsReducer  });

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

