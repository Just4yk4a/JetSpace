import {observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class CarStore {
    @observable
    cars = [];

    getAll(){
        fetch(CONTEXT_URL + "api/cars")
            .then(response => response.json())
            .then(cars => this.cars = cars)
            .catch(console.error)
    }
}