var restricted = require('./restricted');

// TODO: not sure how to do restrict in app.use(...)
restricted.get('/pages', function(req, res) {
  res.json([
    { _id: 1, title: 'note1' },
    { _id: 2, title: 'note2' }
  ]);
});

restricted.get('/pages/:id', function(req, res) {
  var params = req.params;
  res.json({
    _id: params.id,
    title: 'title ' + params.id,
    text: '##text `class AuthRoute`' + params.id
  });
});

module.exports = restricted.router;