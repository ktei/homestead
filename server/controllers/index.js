var express = require('express');
var router = express.Router();

var spaPaths = ['/', '/resume', '/wiki*', '/login']; // Paths resolved by ember

router.get(spaPaths, function(req, res) {
  res.render('index');
});

module.exports = router;
