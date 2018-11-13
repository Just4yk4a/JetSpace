import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";


@inject('authStore')
@observer
export default class Login extends React.Component {

    signIn() {
        this.props.authStore.signIn();
    }

    logOut() {
        this.props.authStore.logOut();
    }

    handleUsernameChange({target: {value}}) {
        this.props.authStore.setUsername(value);
    }

    handlePasswordChange({target: {value}}) {
        this.props.authStore.setPassword(value);
    }

    render() {
        return (
            <div>
                {this.props.authStore.user == null ? null : <Redirect to={"/"}/> }
                <form>
                    <input type="text" name="username" onChange={this.handleUsernameChange.bind(this)}/>
                    <br/>
                    <input type="password" name="password" onChange={this.handlePasswordChange.bind(this)}/>
                    <br/>
                </form>
                <button onClick={this.signIn.bind(this)}>Войти</button>
                <br/>
                <button onClick={this.logOut.bind(this)}>Выйти</button>
            </div>
        );
    }
}