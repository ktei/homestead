import Auth from '../utils/auth';

export default {
  name: 'inject-auth',
  initialize: function(container, app) {
    app.register('auth:main', Auth);
    app.inject('route', 'auth', 'auth:main');
    app.inject('controller', 'auth', 'auth:main');
  }
}