import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import Login from "../Login";
import User from "../User";
import {inject} from "mobx-react";
import Header from "../Header";

@inject('authStore', 'testStore')
export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <AdminRoute path="/user" user={this.props.authStore.user} component={User}/>
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