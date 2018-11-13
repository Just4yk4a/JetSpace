import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class CarStore {
    @observable
    cars = [];
    @observable
    car = null;

    getAll() {
        fetch(CONTEXT_URL + "api/cars")
            .then(response => response.json())
            .then(action(cars => this.cars = cars))
            .catch(console.error)
    }

    getByID(id) {
        fetch(CONTEXT_URL + "api/cars/" + id)
            .then(response => response.json())
            .then(result => this.car = result)
            .then(console.log)
            .catch(console.error);
    }
}