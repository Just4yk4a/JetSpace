import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class DriverStore {
    @observable
    drivers = [];

    findAll(){
        fetch(CONTEXT_URL + "api/drivers")
            .then(response => response.json())
            .then(action(result => this.drivers = result))
            .catch(console.error)
    }
}