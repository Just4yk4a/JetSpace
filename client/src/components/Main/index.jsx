import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import Login from "../Login";
import User from "../User";
import {inject} from "mobx-react";
import Header from "../Header";
import Welcome from "../Welcome";
import WorkerAdd from "../WorkerAdd";
import Workers from "../Workers";
import OrderAdd from "../OrderAdd";
import Orders from "../Orders";

@inject('authStore', 'testStore')
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/welcome" component={Welcome}/>
                    <Route path="/login" component={Login}/>
                    <Route exact path="/workers" component={Workers}/>
                    <Route path="/workers/add" component={WorkerAdd}/>
                    <DispatcherRoute exact path="/orders" user={this.props.authStore.user} component={Orders}/>
                    <Route path="/orders/add" component={OrderAdd}/>
                    <AdminRoute path="/user" user={this.props.authStore.user} component={User}/>
                    <Route path='*' component={() => <Redirect to={{pathname: '/welcome'}}/>}/>
                </Switch>
            </div>
        )
    };
}

const AdminRoute = ({component: Component, user, ...rest}) => {
    const role = user == null ? null : user.authorities[0].authority;
    return <Route {...rest} render={(props) => (
        role === "ADMIN"
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
};

const DispatcherRoute = ({component: Component, user, ...rest}) => {
    const role = user == null ? null : user.authorities[0].authority;
    return <Route {...rest} render={(props) => (
        role === "DISPATCHER"
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
};