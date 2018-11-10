const CONTEXT_URL = process.env.REACT_APP_API_URL || '';

export default class TestStore {
    message = "";

    getMessage(){
        const params = {
            method: 'GET',
            body: {},
            headers: {'Content-Type': 'application/plain'}
        };
        fetch(CONTEXT_URL + "api/welcome", params)
            .then(response => response.text())
            .then(message => console.log(message))
    }
}