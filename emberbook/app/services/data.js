import Service from '@ember/service';
import ENV from '../config/environment';

export default Service.extend({
    getBooks(search) {
        let queryParams = '';
        if (search){
            queryParams=`?q=${search}`;
        }

        return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
    },

    getBook(id){
        return fetch(`http://localhost:3000/books/${id}`).then((response) => response.json());
    },

    deleteBook(book) {
        return fetch(`${ENV.backendURL}/books/${book.id}`, {method: 'DELETE'});
    },

    createBook(book) {
        return fetch(`${ENV.backendURL}/create`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
    }
});