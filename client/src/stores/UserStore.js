import {action, observable} from "mobx";


export default class UserStore {
    @observable
    message = "";

    getMessage() {
        fetch('http://localhost:8080/JetSpace/api/welcome')
            .then(action(response => response.text()))
            .then(action((text) => this.message = text))
    }

    signIn(username, password) {
        const paramsUser = {
            username: username,
            password: password,
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
        fetch('http://localhost:8080/JetSpace/login', params)
            .then(response => response.json())
            .then(user => console.log(user))
            .catch(e => console.log(e));
    }
}