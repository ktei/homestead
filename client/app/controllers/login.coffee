`import Ember from 'ember'`

LoginController = Ember.Controller.extend
  reset: ->
    @setProperties
      username: '',
      password: '',
      errorMessage: ''

  errorMessage: ''

  hasErrorMessage: (->
    @get('errorMessage').length > 0
  ).property('errorMessage')

  isLoggingIn: false

  actions:
    login: ->
      self = @
      @set 'errorMessage', ''
      @set 'isLoggingIn', true
      @auth.login @getProperties('username', 'password'), {
        success: (result) ->
          if result.success is true
            attemptedTransition = self.get 'attemptedTransition'
            if attemptedTransition
              attemptedTransition.retry();
              self.set 'attemptedTransition', null
            else
              self.transitionToRoute 'index'
          else
            self.set 'errorMessage', 'Login failed. ' + (result.error || 'Please check user name and password')
        error: (reason) -> self.set 'errorMessage', 'Login failed. Server error occurred.'
        complete: -> self.set 'isLoggingIn', false
      }

  

`export default LoginController`