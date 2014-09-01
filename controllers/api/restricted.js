var express = require('express');
var router = express.Router();

module.exports = {
  get: function(path, callback) {
    router.get(path, restrict, function(req, res) {
      callback(req, res);
    });
  },
  post: function(path, callback) {
    router.post(path, restrict, function(req, res) {
      callback(req, res);
    })
  },
  router: router
}

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.send(401);
  }
}