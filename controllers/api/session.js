var hash = require('./pass').hash;
var express = require('express');
var router = express.Router();

router.post('/login', function(req, res) {
  params = req.body;
  if (params.username && params.password) {
    authenticate(params.username, params.password, function(err, user) {
      if (user) {
        req.session.user = user;
        res.json({success: true, user: user});
      } else {
        res.json({success: false});
      }
    });
  } else {
    res.json({success: false, error: 'User name and password cannot be blank.'});
  }
});

router.all('/logout', function(req, res) {
  delete req.session.user;
  res.json({success: true});
});

var users = {
  ktei: { name: 'ktei' }
};

// when you create a user, generate a salt
// and hash the password ('ktei' is the pass here)
hash('blizzard', function(err, salt, hash){
  if (err) throw err;
  // store the salt & hash in the "db"
  users.ktei.salt = salt;
  users.ktei.hash = hash;
});

// Authenticate using our plain-object database of doom!
function authenticate(name, pass, fn) {
  if (!module.parent) console.log('authenticating %s:%s', name, pass);
  var user = users[name];
  // query the db for the given username
  if (!user) {
    return fn(new Error('cannot find user'));
  }
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  hash(pass, user.salt, function(err, hash){
    if (err) {
      return fn(err);
    }
    if (hash == user.hash) {
      return fn(null, user);
    }
    fn(new Error('invalid password'));
  });
}

module.exports = router;