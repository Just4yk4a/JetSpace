import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import {inject, observer} from 'mobx-react';
import {Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';

/**
 * Dropdown with free drivers
 */
@inject('orderStore', 'workerStore')
@observer
export default class DropdownDrivers extends React.Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = {
            driver: props.order.driver,
            drivers: []
        };
    }

    /**
     * Get free users
     */
    getUsers() {
        this.props.workerStore.getFreeUsersByDate(this.props.order.date)
            .then(result => this.setState({
                driver: this.state.driver,
                drivers: result
            }));
    };

    /**
     * Set driver
     */
    setDriver(driver) {
        let {drivers} = this.state;
        let index = drivers.findIndex(el => el.id === driver.id);
        drivers[index] = this.state.driver;
        this.setState({
            driver: driver,
            drivers: drivers
        });
    };

    /**
     * Save order with new user
     */
    addOrder() {
        this.props.orderStore.update(this.props.order.id, this.state.driver);
    };

    render() {
        const {order} = this.props;
        return (
            <div>
                <UncontrolledDropdown>
                    <DropdownToggle caret onClick={this.getUsers.bind(this)}>
                        {this.state.driver == null ? 'SELECT DRIVER' : this.state.driver.name}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.state.drivers.map(user => {
                            if (user != null && user.categories != null && user.categories.findIndex(el => el.id === order.car.category.id) !== -1) {
                                return <DropdownItem key={user.id}
                                                     onClick={() => this.setDriver.bind(this)(user)}>{user.name}</DropdownItem>;
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