`import Ember from 'ember'`
`import Notify from 'ember-notify'`

AuthRoute = Ember.Route.extend
  beforeModel: (transition) ->
    if @auth.get('isLoggedIn') isnt true
      @redirectToLogin transition

  redirectToLogin: (transition) ->
    Notify.warning 'You need to login to continue'
    loginController = @controllerFor 'login'
    loginController.set 'attemptedTransition', transition
    @transitionTo 'login'

  actions:
    error: (reason, transition) ->
      statusCode = 0
      statusCode = reason.jqXHR.status if !!reason.jqXHR
      if statusCode is 401
        @auth.clear()
        @redirectToLogin transition
      else if statusCode is 404
        @transitionTo 'notFound'
      else
        alert 'Something went wrong'



`export default AuthRoute`