import Controller from '@ember/controller';
import {inject as service} from '@ember/services';

export default Controller.extend({
    dataService: service('data'),
    actions: {
       async saveBook(e) {
        e.preventDefault();

        await this.get("dataService").createBook({
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        tags: this.get('tags')
        });

        this.transitionToRoute('books');
       }
    }
});
