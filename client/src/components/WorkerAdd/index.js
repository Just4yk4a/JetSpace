import "./index.css";

import React from 'react';
import {inject, observer} from "mobx-react";
import {Button, Col, CustomInput, Form, FormGroup, Input, Label} from 'reactstrap';

@inject("workerStore", "categoryStore")
@observer
export default class WorkerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roleId: null
        };
        this.handleRoleChange = this.handleRoleChange.bind(this);
    }

    componentDidMount() {
        this.props.categoryStore.findAll();
    }

    handleCategoryChange(id) {
        this.props.workerStore.setCategory(id);
    }

    handleUsernameChange({target: {value}}) {
        this.props.workerStore.setUsername(value);
    }

    handlePasswordChange({target: {value}}) {
        this.props.workerStore.setPassword(value);
    }

    handleRoleChange(value) {
        this.props.workerStore.setRole(value);
        this.setState({
            roleId: value
        });
    }

    handleNameChange({target: {value}}) {
        this.props.workerStore.setName(value);
    }

    render() {
        const {categories} = this.props.categoryStore;
        return (
            <div>
                <h2 className={'header'}>Add new worker!</h2>
                <Form className={'worker-form'}>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username:</Label>
                        <Col sm={8}>
                            <Input type="username" id="username" placeholder="username"
                                   onChange={this.handleUsernameChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password:</Label>
                        <Col sm={8}>
                            <Input type="username" id="password" placeholder="password"
                                   onChange={this.handlePasswordChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name:</Label>
                        <Col sm={8}>
                            <Input type="name" id="password" placeholder="Name"
                                   onChange={this.handleNameChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Role:</Label>
                        <Col sm={8}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="role" onChange={() => this.handleRoleChange(2)}/>{' '}
                                    Driver
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="role" onChange={() => this.handleRoleChange(3)}/>{' '}
                                    Dispatcher
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    {this.state.roleId === 2 ?
                        <FormGroup row>
                            <Label for="categoryCheckbox" sm={2}>Checkboxes:</Label>
                            <Col sm={8}>
                                {categories.map(({type, id}) => <CustomInput key={type}
                                                                             onChange={() => this.handleCategoryChange(id)}
                                                                             type="checkbox"
                                                                             id={type}
                                                                             label={type}/>)}
                            </Col>
                        </FormGroup> : null}
                    <Button onClick={() => this.props.workerStore.save()}>Submit</Button>
                    <br/>
                    {this.props.workerStore.error}
                </Form>
            </div>
        );
    }
}