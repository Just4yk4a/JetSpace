import moment from 'moment';
import {action, observable} from 'mobx';

const CONTEXT_URL = process.env.REACT_APP_API_URL || '/JetSpace';

/**
 * Store for working with orders
 */
export default class OrderStore {
    /**
     * All orders
     */
    @observable
    orders = [];
    /**
     * New order
     */
    @observable
    order = {
        car: {
            id: null
        },
        date: moment(),
        phone: null
    };

    /**
     * Set car id
     */
    @action
    setCarId(id) {
        this.order.car.id = id;
    }

    /**
     * Set date
     */
    @action
    setDate(date) {
        this.order.date = date;
    }

    /**
     * Set phone
     */
    @action
    setPhone(phone) {
        this.order.phone = phone;
    }

    /**
     * Checkout
     */
    checkout() {
        this.save(this.order);
    }

    /**
     * Update order
     */
    update(orderId, driver) {
        let order = this.orders.find(order => order.id === orderId);
        order.driver = driver;
        this.save(order);
    }

    /**
     * Send order to server
     */
    save(order) {
        const params = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'Content-Type': 'application/json'}
        };
        fetch(CONTEXT_URL + '/api/orders', params)
            .then(response => response.json())
            .catch(console.error)
    }

    /**
     * Find all orders
     */
    findAll() {
        fetch(CONTEXT_URL + '/api/orders')
            .then(response => response.json())
            .then(action(result => this.orders = result))
            .catch(console.error)
    }

    /**
     * Find all by user id
     */
    findAllByDriverId(driverId) {
        fetch(CONTEXT_URL + '/api/orders/driver=' + driverId)
            .then(response => response.json())
            .then(action(result => this.orders = result))
            .catch(console.error)
    }

    /**
     * Delete by id
     */
    deleteById(id) {
        const param = {
            method: 'DELETE'
        };
        fetch(CONTEXT_URL + '/api/orders/' + id, param)
            .then(action(this.orders.splice(this.orders.findIndex(el => el.id === id), 1)))
            .catch(console.error)
    }
}