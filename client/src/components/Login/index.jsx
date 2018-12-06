import "./index.css";

import React from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";


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
        const {error} = this.props.authStore;
        return (
            <div className="login-form">
                {this.props.authStore.user == null ? null : <Redirect to={"/"}/>}
                <h2 className={"sign-in-header"}>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                onChange={this.handleUsernameChange.bind(this)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="Password"
                                placeholder="********"
                                onChange={this.handlePasswordChange.bind(this)}
                            />
                        </FormGroup>
                    </Col>
                    {error === null ? null : <p className={"error-message"}>{error}</p>}
                    <Button className={"button-submit"} onClick={this.signIn.bind(this)}>Submit</Button>
                </Form>
            </div>
        );
    }
}