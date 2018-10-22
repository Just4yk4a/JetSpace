import {observable, action} from "mobx";


const CONTEXT_URL = process.env.REACT_APP_API_URL || '';
const DRIVERS_URL = CONTEXT_URL + 'api/drivers';

export default class DriverStore {
    @observable
    drivers = [];
    @observable
    selectedDriver = null;


    create() {
        const params = {
            method: 'POST',
            body: JSON.stringify(DriverStore.generate()),
            headers: {'Content-Type': 'application/json'}
        };
        fetch(DRIVERS_URL, params)
            .then(response => response.json())
            .then(action(driver => this.drivers.push(driver)))
            .catch(e => console.log(e));
    }

    load(id) {
        const params = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        fetch(DRIVERS_URL+`/${id}`, params)
            .then(response => response.json())
            .then(action(driver => this.selectedDriver = driver))
            .catch(e => console.log(e));
    }

    @action
    deselect(){
        this.selectedDriver = null;
    }

    /**
     * @private
     */
    static generate() {
        const number = Math.round(1000000 * Math.random());
        return {name: "Test User " + number};
    }

    delete(identity) {
        fetch(DRIVERS_URL + "/" + identity, {method: 'DELETE'})
            .then(() => this.deleteHandler(identity))
            .catch(e => console.error(e.message))
    }

    @action
    deleteHandler(identity) {
        const itemIndex = this.drivers.findIndex(({id}) => id === identity);
        if (itemIndex > -1) {
            this.drivers.splice(itemIndex, 1);
        }
    }

    loadAll() {
        fetch(DRIVERS_URL)
            .then(response => response.json())
            .then(action(drivers => this.drivers = drivers))
            .catch(error => console.error(error.message))
    }
}

