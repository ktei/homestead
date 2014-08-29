var index = require('./controllers/index');
var wiki = require('./controllers/api/wiki');
var session = require('./controllers/api/session');

exports.setup = function(app) {
  app.use('/', index);
  app.use('/api/session', session);
  app.use('/api/wiki', wiki);
}