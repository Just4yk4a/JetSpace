import moment from "moment";
import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class OrderStore {
    @observable
    orders = [];
    @observable
    order = {
        car: {
            id: null
        },
        date: moment(),
        phone: null
    };

    @action
    setCarId(id) {
        this.order.car.id = id;
    }

    @action
    setDate(date) {
        this.order.date = date;
    }

    @action
    setPhone(phone) {
        this.order.phone = phone;
    }

    checkout() {
        this.addOrder(this.order);
    }

    update(orderId, driverId){
        let order = this.orders.find(order => order.id === orderId);
        order.driver = {id: driverId};
        this.addOrder(order);
    }

    addOrder(order) {
        console.log(order);
        const params = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'Content-Type': 'application/json'}
        };
        console.log(this.order.phone);
        fetch(CONTEXT_URL + "api/orders", params)
            .then(response => response.json())
            .then(message => console.log(message))
            .catch(console.error)
    }

    findAll() {
        fetch(CONTEXT_URL + "api/orders")
            .then(response => response.json())
            .then(action(result => this.orders = result))
            .catch(console.error)
    }
}