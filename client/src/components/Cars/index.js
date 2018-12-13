import './index.css';

import React from 'react';
import {inject, observer} from 'mobx-react';
import {Table} from 'reactstrap';
import {Link} from 'react-router-dom';

import image from '../../resources/images/default.png'

/**
 * Table of cars
 */
@inject('carStore', 'orderStore')
@observer
export default class Cars extends React.Component {

    componentDidMount() {
        this.props.carStore.getAll();
    }

    render() {
        return (
            <div className={'cars'}>
                <h2 className={'cars-header'}>Cars:</h2>
                <Table striped className={'cars-table'}>
                    <thead>
                    <tr>
                        <th className={'th car-image'}>Image</th>
                        <th className={'th car-weight'}>Weight</th>
                        <th className={'th car-volume'}>Volume</th>
                        <th className={'th car-category'}>Category</th>
                        <th className={'th car-order'}>Order</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.loadCars()}
                    </tbody>
                </Table>
            </div>
        );
    }

    makeOrder(id) {
        this.props.orderStore.setCarId(id);
    }

    loadCars() {
        const {cars} = this.props.carStore;
        return cars.map(car => (
            <tr key={car.id}>
                <td><img src={image} className='car-icon' alt='car-icon'/></td>
                <td>{car.weight}</td>
                <td>{car.volume}</td>
                <td>{car.category.type}</td>
                <td><Link to='/orders/add' onClick={() => this.makeOrder(car.id)}>
                    <button>Order</button>
                </Link></td>
            </tr>
        ))
    }
}