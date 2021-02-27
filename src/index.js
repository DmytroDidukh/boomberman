import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from "redux";
import {ThemeProvider} from "@material-ui/core";
import dotenv from 'dotenv'

import App from './App';
import {rootReducer, initialState} from './redux/reducer'
import theme from "./theme";

import './index.scss';

dotenv.config()

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);
