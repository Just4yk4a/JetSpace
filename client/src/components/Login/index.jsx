import React from "react";
import {inject, observer} from "mobx-react";


@inject('userStore')
@observer
export default class Login extends React.Component {

    signIn(){
        this.props.userStore.signIn("user", "1234");
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="j_username"/>
                    <br/>
                    <input type="password" name="j_password"/>
                </form>
                <button onClick={() => this.signIn()}>Войти</button>
            </div>
        );
    }
}