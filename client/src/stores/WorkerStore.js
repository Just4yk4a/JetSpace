import {action, observable} from 'mobx';

const CONTEXT_URL = process.env.REACT_APP_API_URL || '/JetSpace';

/**
 * Store for working with users
 */
export default class WorkerStore {
    /**
     * All users
     */
    @observable
    users = [];

    /**
     * Error message
     */
    @observable
    error = null;

    /**
     * Object of new user
     */
    newUser = {
        username: null,
        password: null,
        name: null,
        role: {
            id: null
        },
        categories: []
    };


    /**
     * Set username
     */
    setUsername(value) {
        this.newUser.username = value;
    }

    /**
     * set category
     */
    setCategory(id) {
        const category = {id: id};
        const index = this.newUser.categories.findIndex(el => el.id === category.id);
        if (index < 0) {
            this.newUser.categories.push(category);
        }
        else {
            this.newUser.categories.splice(index, 1);
        }
    }

    /**
     * Set password
     */
    setPassword(value) {
        this.newUser.password = value;
    }

    /**
     * Set role
     */
    setRole(value) {
        this.newUser.role.id = value;
    }

    /**
     * Set name
     */
    setName(value) {
        this.newUser.name = value;
    }

    /**
     * Save user
     */
    save() {
        const param = {
            method: 'POST',
            body: JSON.stringify(this.newUser),
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
        };
        fetch(CONTEXT_URL + '/api/users', param)
            .then(response => response.json())
            .then(console.log)
            .catch(action((err) => {
                this.error = 'Username is already in use';
            }));
    }

    /**
     * Get all users
     */
    getAll() {
        fetch(CONTEXT_URL + '/api/users')
            .then(response => response.json())
            .then(action(users => this.users = users))
            .catch(error => console.error(error))
    }

    /**
     * Delete user by id
     */
    deleteById(id) {
        const param = {
            method: 'DELETE'
        };
        fetch(CONTEXT_URL + '/api/users/' + id, param)
            .then(message => console.log(message))
            .catch(console.error)
    }

    /**
     * Get all free users by date
     */
    getFreeUsersByDate(date) {
        return (fetch(CONTEXT_URL + '/api/users/' + date)
            .then(response => response.json())
            .catch(console.error));
    }
}