import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import Notify from 'ember-notify';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'client', // TODO: loaded via config
  Resolver: Resolver
});

// Enable foundation
Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
  afterRenderEvent : function(){
    Ember.$('.has-tooltip').tooltip();
  }
});

loadInitializers(App, 'client');

Notify.useBootstrap();

export default App;

