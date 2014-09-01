var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var http = require('http');
var mongoose = require('mongoose');
var routes = require('./routes');

var app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'km5jpVEi',
  saveUninitialized: true,
  resave: true}));
app.use(express.static(path.join(__dirname, 'public')));

// This needs to go fire before routes setup
app.use(function(req, res, next) {
  req.db = db;
  next();
});

// Setup routes
routes.setup(app);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Database setup
app.set('db_conn_str', 'mongodb://ktei:km5jpVEi@ds051368.mongolab.com:51368/homestead');
if (app.get('env') === 'development') {
  app.set('db_conn_str', 'mongodb://localhost:27017/homestead');
}
// Mongoose
mongoose.connect(app.get('db_conn_str'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // Start the application after the database connection is ready
  http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
  });
});

module.exports = app;
