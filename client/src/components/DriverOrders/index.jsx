import './index.css';

import * as moment from 'moment';

import React from 'react';
import {inject, observer} from 'mobx-react';
import {Button, Table} from 'reactstrap';

/**
 * Table with orders for driver
 */
@inject('orderStore')
@observer
export default class DriverOrders extends React.Component {
    /**
     * Find orders when component has mounted
     */
    componentDidMount() {
        this.props.orderStore.findAllByDriverId(JSON.parse(sessionStorage.getItem('user')).id);
    }

    /**
     * Delete order by id
     */
    deleteById(id) {
        this.props.orderStore.deleteById(id);
    }

    /**
     * Generate row component of order
     */
    loadOrders() {
        const {orders} = this.props.orderStore;
        return orders.map(order => (
            <tr key={order.id}>
                <td>{order.phone}</td>
                <td>{moment(order.date).format('dddd, MMMM Do YYYY')}</td>
                <td><Button onClick={() => this.deleteById(order.id)}>Done</Button></td>
            </tr>
        ))
    }

    render() {
        return (
            <div className={'d-orders'}>
                <h2 className={'d-orders-header'}>Orders:</h2>
                <Table striped className={'d-orders-table'}>
                    <thead>
                    <tr>
                        <th>Phone number</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.loadOrders()}
                    </tbody>
                </Table>
            </div>
        );
    }
}