import * as moment from "moment";

import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {inject, observer} from "mobx-react";
import {Table} from "reactstrap";
import DropdownDrivers from "../DropdownDrivers";

@inject('orderStore', 'driverStore', 'carStore')
@observer
export default class Orders extends React.Component{

    componentDidMount(){
        this.props.orderStore.findAll();
        this.props.driverStore.findAll();
        this.props.carStore.getAll();
    }

    render(){
        return (<div>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Car id</th>
                        <th>Phone number</th>
                        <th>Date</th>
                        <th>Driver</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.loadOrders()}
                    </tbody>
                </Table>
            </div>
        );
    }

    loadOrders() {
        const {orders} = this.props.orderStore;
        return orders.map(order => (
            <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.car.id}</td>
                <td>{order.phone}</td>
                <td>{moment(order.date).format("dddd, MMMM Do YYYY")}</td>
                <td>
                    <DropdownDrivers carId={order.car.id} orderId={order.id}/>
                </td>
            </tr>
        ))
    }
}