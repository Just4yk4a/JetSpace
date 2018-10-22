import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Main from './components/Main';
import DriverStore from "./stores/DriverStore";
import UserStore from "./stores/UserStore";

const stores = {
    driverStore: new DriverStore(),
    userStore: new UserStore()
};

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter basename="/JetSpace/#">
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

