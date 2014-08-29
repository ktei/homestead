`import Ember from 'ember'`
`import Notify from 'ember-notify'`

ApplicationController = Ember.Controller.extend
  isLoggedIn: Ember.computed.alias('auth.isLoggedIn'),
  appName: "Rui's Homestead"

  actions:
    logout: ->
      @auth.logout()
      Notify.info 'You have logged out'
      @transitionToRoute 'login'


`export default ApplicationController`
