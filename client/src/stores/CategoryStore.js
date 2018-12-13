import {action, observable} from 'mobx';

const CONTEXT_URL = process.env.REACT_APP_API_URL || '/JetSpace';
const CATEGORIES_URL = CONTEXT_URL + '/api/categories';

/**
 * Store for working with orders
 */
export default class CategoryStore {
    /**
     * All categories
     */
    @observable
    categories = [];

    /**
     * Find all
     */
    findAll() {
        fetch(CATEGORIES_URL)
            .then(response => response.json())
            .then(action(result => this.categories = result))
            .catch(console.log)
    }
}