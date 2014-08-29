import Ember from "ember";

var showdown = new Showdown.converter();

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  return new Handlebars.SafeString(showdown.makeHtml(value || ''));
});