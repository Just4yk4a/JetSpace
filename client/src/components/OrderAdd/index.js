import React from 'react';
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import {inject, observer} from "mobx-react";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

@inject('orderStore')
@observer
export default class OrderAdd extends React.Component {
    handleChangeDate(date) {
        this.props.orderStore.setDate(date);
    }

    handlePhoneChange({target: {value}}) {
        this.props.orderStore.setPhone(value);
    };

    render() {
        return (
            <div>
                <h1>Order</h1>
                <Form>
                    <FormGroup row>
                        <Label for="phone" sm={2}>Number:</Label>
                        <Col sm={8}>
                            <Input type="phone" id="phone" placeholder="PHONE"
                                   onChange={this.handlePhoneChange.bind(this)}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="date" sm={2}>Date:</Label>
                        <Col sm={8}>
                            <DatePicker
                                selected={this.props.orderStore.order.date}
                                onChange={this.handleChangeDate.bind(this)}
                                minDate={moment()}
                                maxDate={moment().add(7, "days")}
                                locale="en-gb"
                                dropdownMode="select"
                                placeholderText="Select a date"/>
                        </Col>
                    </FormGroup>
                    <Button onClick={() => this.props.orderStore.checkout()}>Add</Button>
                </Form>
            </div>
        );
    }
}