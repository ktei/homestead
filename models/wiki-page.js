var mongoose = require('mongoose');

var schema = mongoose.Schema({
  title: String,
  body: String,
  lastModifiedDate: { type: Date, default: Date.now }
});

schema.index({ title: 1 });

var model = mongoose.model('WikiPage', schema);

module.exports = model;