import moment from "moment";
import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class OrderStore {
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
    setPhone(phone){
        this.order.phone = phone;
    }

    checkout() {
        const params = {
            method: 'POST',
            body: JSON.stringify(this.order),
            headers: {'Content-Type': 'application/json'}
        };
        console.log(this.order.phone);
        fetch(CONTEXT_URL + "api/orders", params)
            .then(response => response.json())
            .then(message => console.log(message))
            .catch(console.error)
    }
}