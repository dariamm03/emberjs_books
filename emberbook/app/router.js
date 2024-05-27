import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('meetings');
  this.route('speakers');
  this.route('books');
  this.route('create');

  this.route('books', {path: '/books'},  function() {
    this.route('detail', {path: '/:id'});
  });
});

export default Router;
