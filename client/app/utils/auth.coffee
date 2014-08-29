`import Ember from 'ember'`

Auth = Ember.Object.extend
  isLoggedIn: Ember.$.cookie('isLoggedIn') is 'true',

  isLoggedInChanged: (->
    Ember.$.cookie('isLoggedIn', @get('isLoggedIn'), { expires: 365 })
  ).observes('isLoggedIn'),

  user: Ember.$.cookie('user'),

  userChanged: (->
    Ember.$.cookie('user', @get('user'))
  ).observes('user'),

  clear: ->
    @set 'isLoggedIn', false
    @set 'user', null

  login: (credential, callbacks) ->
    self = @
    Ember.$.post('/api/session/login', credential).success(
      (result) ->
        if result.success is true
          self.set 'isLoggedIn', true
          self.set 'user', result.user
        callbacks.success(result) if callbacks.success
    ).error(
      (reason) -> callbacks.error(reason) if callbacks.error
    ).complete ->
        callbacks.complete() if callbacks.complete

  logout: (callbacks) ->
    self = @
    callbacks = callbacks || {}
    self.set 'isLoggedIn', false
    self.set 'user', null
    Ember.$.post('/api/session/logout').success(
      (result) -> callbacks.success(result) if callbacks.success
    ).error(
      (reason) -> callbacks.error(reason) if callbacks.error
    ).complete ->
      callbacks.complete() if callbacks.complete


`export default Auth`