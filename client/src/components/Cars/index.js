import React from 'react';
import {inject, observer} from "mobx-react";
import { Table } from 'reactstrap';
import {Link} from "react-router-dom";

@inject('carStore', 'orderStore')
@observer
export default class Cars extends React.Component{

    componentDidMount() {
        this.props.carStore.getAll();
    }

    render(){
        return (<Table striped>
            <thead>
            <tr>
                <th>#</th>
                <th>Weight</th>
                <th>Volume</th>
                <th>Category</th>
                <th>Order</th>
            </tr>
            </thead>
            <tbody>
            {this.loadCars()}
            </tbody>
        </Table>
        );
    }

    makeOrder(id){
        this.props.orderStore.setCarId(id);
    }

    loadCars() {
        const {cars} = this.props.carStore;
        return cars.map(car => (
            <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.weight}</td>
                <td>{car.volume}</td>
                <td>{car.category.type}</td>
                <td><Link to="/order" onClick={() => this.makeOrder(car.id)}><button>Order</button></Link></td>
            </tr>
        ))
    }
}