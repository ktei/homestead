var restricted = require('./restricted');
var ObjectId = require('mongodb').ObjectID;
var WikiPage = require('../../models/wiki-page');

// TODO: not sure how to do restrict in app.use(...)
restricted.get('/pages', function(req, res) {
  WikiPage.find(function(err, items) {
    res.json(items);
  });
});

restricted.get('/pages/:id', function(req, res) {
  var params = req.params;
  WikiPage.findById(params.id, function(err, item) {
    res.json(item);
  });
});

restricted.post('/pages', function(req, res) {
  var params = {
    id: req.body._id,
    title: req.body.title,
    body: req.body.body
  };
  if (params.id) {
    WikiPage.findOneAndUpdate(params.id, params, function(err, item) {
      res.json(item);
    });
  } else {
    WikiPage.create(params, function(err, item) {
      res.json(item);
    });
  }
});

restricted.post('/pages/:id/delete', function(req, res) {
  WikiPage.remove({ _id: new ObjectId(req.params.id) }, function(err) {
    res.json({ success: true });
  });
});

module.exports = restricted.router;