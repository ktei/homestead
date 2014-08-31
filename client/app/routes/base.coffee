`import Ember from 'ember'`

BaseRoute = Ember.Route.extend
  serialize: (model) ->
    return { id:  model._id }

`export default BaseRoute`