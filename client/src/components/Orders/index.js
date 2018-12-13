import './index.css';

import * as moment from 'moment';

import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {inject, observer} from 'mobx-react';
import {Table} from 'reactstrap';
import DropdownDrivers from '../DropdownDrivers';

/**
 * Class with orders
 */
@inject('orderStore', 'carStore')
@observer
export default class Orders extends React.Component {
    componentDidMount() {
        this.props.orderStore.findAll();
        this.props.carStore.getAll();
    }

    /**
     * Map orders to components
     */
    loadOrders() {
        const {orders} = this.props.orderStore;
        return orders.map(order => (
            <tr key={order.id}>
                <td>{order.phone}</td>
                <td>{moment(order.date).format('dddd, MMMM Do YYYY')}</td>
                <td>
                    <DropdownDrivers order={order}/>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className={'orders'}>
                <h2 className={'orders-header'}>Orders:</h2>
                <Table striped className={'orders-table'}>
                    <thead>
                    <tr>
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
}