import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from "redux";

import App from './App';
import {rootReducer, initialState} from './redux/reducer'

import './index.css';

const store = createStore(rootReducer, initialState)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
