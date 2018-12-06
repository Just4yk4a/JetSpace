import {action, observable} from "mobx";

const CONTEXT_URL = process.env.REACT_APP_API_URL || '/JetSpace';

/**
 * Store for working with authorisation
 */
export default class AuthStore {
    /**
     * Auth user
     */
    @observable
    user = JSON.parse(sessionStorage.getItem('user'));

    @observable
    error = null;

    /**
     * Username of user
     */
    username = '';
    /**
     * Password of user
     */
    password = '';

    /**
     * Set new username
     */
    setUsername(username) {
        this.username = username;
    }

    /**
     * Set new password
     */
    setPassword(password) {
        this.password = password;
    }

    /**
     * Get auth newUser from server
     */
    signIn() {
        const paramsUser = {
            username: this.username,
            password: this.password,
        };
        let formData = [];
        for (let index in paramsUser) {
            let encodedKey = encodeURIComponent(index);
            let encodedValue = encodeURIComponent(paramsUser[index]);
            formData.push(encodedKey + '=' + encodedValue);
        }
        formData = formData.join('&');
        const params = {
            method: 'POST',
            body: formData,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        };
        fetch(CONTEXT_URL + '/login', params)
            .then(response => response.json())
            .then(action(user => {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.user = user;
            }))
            .catch(action(error => this.error = "Invalid username or password"));
    }


    /**
     * log out
     */
    logOut() {
        fetch(CONTEXT_URL + '/logout', {method: 'POST'})
            .then(() => {
                this.user = null;
                this.error = null;
                sessionStorage.clear();
            })
            .catch(console.log);
    }
}