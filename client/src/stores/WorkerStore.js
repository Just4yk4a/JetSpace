import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class WorkerStore {
    newUser = {
        username: null,
        password: null,
        name: null,
        role: {
            id: null
        }
    };
    @observable
    users = [];
    @observable
    error = null;

    setUsername(value){
        this.newUser.username = value;
    }

    setPassword(value){
        this.newUser.password = value;
    }

    setRole(value){
        this.newUser.role.id = value;
    }

    setName(value){
        this.newUser.name = value;
    }


    save() {
        const param = {
            method: 'POST',
            body: JSON.stringify(this.newUser),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        };
        fetch(CONTEXT_URL + "api/users", param)
            .then(response => response.json())
            .then(console.log)
            .catch(action((err) => {
                this.error = "Username is already in use";
            }));
    }

    getAll() {
        fetch(CONTEXT_URL + "api/users")
            .then(response => response.json())
            .then(action(users => this.users = users))
            .catch(error => console.error(error))
    }

    deleteById(id) {
        const param = {
            method: 'DELETE'
        };
        fetch(CONTEXT_URL + "api/users/" + id, param)
            .then(message => console.log(message))
            .catch(console.error)
    }
}