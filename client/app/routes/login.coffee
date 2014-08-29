`import Ember from 'ember'`

LoginRoute = Ember.Route.extend
  
  setupController: (controller) ->
    controller.reset()


`export default LoginRoute`