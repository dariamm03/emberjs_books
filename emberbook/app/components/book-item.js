import Component from '@ember/component';

export default Component.extend({
    action: {
        deleteBook(event) {
            event.preventDefault();

            this.onclick({
                id: this.get('book.id'),
                title: this.get('book.title'),
                author: this.get('book.author'),
                tags: this.get('book.tags'),
            })
        }
    }
});
