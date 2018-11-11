import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';
import AuthStore from "./stores/AuthStore";
import TestStore from "./stores/TestStore";
import WorkerStore from "./stores/WorkerStore";
import CarStore from "./stores/CarStore";
import OrderStore from "./stores/OrderStore";

const stores = {
    authStore: new AuthStore(),
    testStore: new TestStore(),
    workerStore: new WorkerStore(),
    carStore: new CarStore(),
    orderStore: new OrderStore()
};

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter basename="/JetSpace">
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

