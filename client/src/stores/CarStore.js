import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '/JetSpace';

/**
 * Store for working with Cars
 */
export default class CarStore {
    /**
     * All cars
     */
    @observable
    cars = [];
    /**
     * Car for order
     */
    @observable
    car = null;

    /**
     * Get all cars from server
     */
    getAll() {
        fetch(CONTEXT_URL + "/api/cars")
            .then(response => response.json())
            .then(action(cars => this.cars = cars))
            .catch(console.error)
    }

    /**
     * Get car by id
     */
    getByID(id) {
        fetch(CONTEXT_URL + "api/cars/" + id)
            .then(response => response.json())
            .then(result => this.car = result)
            .then(console.log)
            .catch(console.error);
    }
}