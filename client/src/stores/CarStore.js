import {action, observable} from 'mobx';

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
     * Initial in car default values
     */
    setCar() {
        this.car = {
            volume: null,
            weight: null,
            category: null
        }
    }

    /**
     * Set null in car variable
     */
    cleanCar() {
        this.car = null;
    }

    /**
     * Set volume value
     */
    setVolume(value) {
        this.car.volume = value;
    }

    /**
     * Set weight value
     */
    setWeight(value) {
        this.car.weight = value;
    }

    /**
     * Set category
     */
    setCategory(value) {
        this.car.category = value;
    }

    /**
     * Get all cars from server
     */
    getAll() {
        fetch(CONTEXT_URL + '/api/cars')
            .then(response => response.json())
            .then(action(cars => this.cars = cars))
            .catch(console.error)
    }

    /**
     * Get car by id
     */
    getByID(id) {
        fetch(CONTEXT_URL + 'api/cars/' + id)
            .then(response => response.json())
            .then(result => this.car = result)
            .then(console.log)
            .catch(console.error);
    }

    /**
     * Save car
     */
    save() {
        console.log(this.car);
        const param = {
            method: 'POST',
            body: JSON.stringify(this.car),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        };
        fetch(CONTEXT_URL + '/api/cars', param)
            .then(response => response.json())
            .then(action(result => this.cars.push(result)))
            .catch(console.error);
    }
}