import React from 'react';
import {inject, observer} from "mobx-react";
import {Button, Col, Form, FormGroup, Input, Label} from 'reactstrap';

@inject("workerStore")
@observer
export default class WorkerAdd extends React.Component {

    handleUsernameChange({target: {value}}) {
        this.props.workerStore.setUsername(value);    }

    handlePasswordChange({target: {value}}) {
        this.props.workerStore.setPassword(value);
    }

    handleRoleChange(value){
        this.props.workerStore.setRole(value)
    }

    handleNameChange(value){
        this.props.workerStore.setName(value)
    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="username" sm={2}>Username:</Label>
                    <Col sm={8}>
                        <Input type="username" id="username" placeholder="username" onChange={this.handleUsernameChange.bind(this)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="password" sm={2}>Password:</Label>
                    <Col sm={8}>
                        <Input type="username" id="password" placeholder="password" onChange={this.handlePasswordChange.bind(this)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={2}>Name:</Label>
                    <Col sm={8}>
                        <Input type="name" id="password" placeholder="Name" onChange={this.handleNameChange.bind(this)}/>
                    </Col>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Role:</legend>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="role" onChange={this.handleRoleChange(2)}/>{' '}
                            Driver
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="role" onChange={this.handleRoleChange(3)}/>{' '}
                            Dispatcher
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button onClick={() => this.props.workerStore.save()}>Submit</Button>
                <br/>
                {this.props.workerStore.error}
            </Form>
        );
    }
}