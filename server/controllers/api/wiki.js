var restricted = require('./restricted');
var ObjectId = require('mongodb').ObjectID;

// TODO: not sure how to do restrict in app.use(...)
restricted.get('/pages', function(req, res) {
  var collection = req.db.collection('wiki_pages');
  collection.find({}, { title: true }).toArray(function(err, items) {
    res.json(items);
  });
});

restricted.get('/pages/:id', function(req, res) {
  var params = req.params;
  var collection = req.db.collection('wiki_pages');
  collection.findOne({ _id: new ObjectId(params.id) }, function(err, item) {
    res.json(item);
  });
  // res.json({
  //   _id: params.id,
  //   title: 'title ' + params.id,
  //   text: '##text `class AuthRoute`' + params.id
  // });
});

module.exports = restricted.router;