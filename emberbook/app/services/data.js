import Service from '@ember/service';
import ENV from '../config/environment';

export default Service.extend({
    getBooks() {
        return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
    },

    getBook(id){
        return fetch(`http://localhost:3000/books/${id}`).then((response) => response.json());
    },

    deleteBook(book) {
        return fetch(`${ENV.backendURL}/books/${book.id}`, {method: 'DELETE'});
    },
});