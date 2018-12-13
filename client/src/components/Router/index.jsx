import './index.css';

import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {inject} from 'mobx-react';

import Login from '../Login';
import WorkerAdd from '../WorkerAdd';
import Workers from '../Workers';
import OrderAdd from '../OrderAdd';
import Orders from '../Orders';
import DriverOrders from '../DriverOrders';
import Cars from '../Cars';
import CarAdd from '../CarAdd';

/**
 * Class with routers
 */
@inject('authStore')
export default class Router extends React.Component {
    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route exact path='/welcome' component={Cars}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/workers' component={Workers}/>
                    <Route path='/workers/add' component={WorkerAdd}/>
                    <AuthRoute exact path='/booking' user={this.props.authStore.user} component={Orders}/>
                    <Route path='/orders/add' component={OrderAdd}/>
                    <AuthRoute exact path='/orders' user={this.props.authStore.user} component={DriverOrders}/>
                    <AuthRoute exact path='/cars/add' user={this.props.authStore.user} component={CarAdd}/>
                    <Route path='*' component={() => <Redirect to={{pathname: '/welcome'}}/>}/>
                </Switch>
            </div>
        )
    };
}

/**
 * Route for auth users.
 */
const AuthRoute = ({component: Component, user, ...rest}) => {
    const role = user == null ? null : user.role.type;
    return <Route {...rest} render={(props) => (
        role !== null
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
};