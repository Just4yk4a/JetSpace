import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import AuthStore from "./stores/AuthStore";
import TestStore from "./stores/TestStore";

const stores = {
    authStore: new AuthStore(),
    testStore: new TestStore()
};

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter basename="/JetSpace">
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

