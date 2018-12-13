import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Main from './components/Main';
import AuthStore from './stores/AuthStore';
import WorkerStore from './stores/WorkerStore';
import CarStore from './stores/CarStore';
import OrderStore from './stores/OrderStore';
import CategoryStore from './stores/CategoryStore';

const stores = {
    authStore: new AuthStore(),
    workerStore: new WorkerStore(),
    carStore: new CarStore(),
    orderStore: new OrderStore(),
    categoryStore: new CategoryStore()
};

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter basename='/JetSpace'>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

