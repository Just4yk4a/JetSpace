const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class TestStore {
    message = "";

    getMessage(){
        fetch(CONTEXT_URL + "api/welcome")
            .then(response => response.text())
            .then(message => console.log(message))
    }
}