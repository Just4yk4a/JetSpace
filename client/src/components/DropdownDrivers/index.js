import React from 'react';

import "react-datepicker/dist/react-datepicker.css";
import {inject, observer} from "mobx-react";
import {Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

@inject('carStore', 'driverStore', 'orderStore')
@observer
export default class DropdownDrivers extends React.Component{

    state = {
        driver: null
    };

    setDriver(driver){
        this.setState({driver: driver});
        console.log(this.state.driver);
    };

    addOrder(){
        this.props.orderStore.update(this.props.orderId, this.state.driver.user.id)
    };

    render(){
        const {cars} = this.props.carStore ;
        const car = cars.find( car => car.id === this.props.carId);
        return (
            <div>
            <UncontrolledDropdown>
                <DropdownToggle caret>
                    {this.state.driver == null ? "SELECT DRIVER" : this.state.driver.user.name}
                </DropdownToggle>
                <DropdownMenu>
                    {this.props.driverStore.drivers.map( driver => {
                        if (car.category.type === driver.category.type) {
                            return <DropdownItem key={driver.id} onClick={() => this.setDriver.bind(this)(driver)}>{driver.user.name}</DropdownItem>;
                        }
                        return null;
                    })}
                </DropdownMenu>
            </UncontrolledDropdown>
                <Button onClick={this.addOrder.bind(this)}>Save</Button>
            </div>
        );
    }
}