import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { setAuthorizationHeader } from "./utils";

const initState = {};

if (localStorage.token) {
    initState.user = { token: localStorage.token };
    setAuthorizationHeader(localStorage.token);
}

const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
