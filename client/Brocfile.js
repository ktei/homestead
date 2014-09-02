/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('vendor/jquery.cookie/jquery.cookie.js');
app.import('vendor/jquery-validation/dist/jquery.validate.min.js');
app.import('vendor/bootstrap/dist/js/bootstrap.min.js');

// fastclick
app.import('vendor/fastclick/lib/fastclick.js');

// vex.js for dialog
app.import('vendor/vex/js/vex.combined.min.js');
app.import('vendor/vex/css/vex.css');
app.import('vendor/vex/css/vex-theme-default.css');

// showdown.js for markdown
app.import('vendor/showdown/src/showdown.js');
app.import('vendor/showdown/compressed/extensions/github.js');


module.exports = app.toTree();



