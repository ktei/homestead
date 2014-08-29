`import Ember from 'ember'`
`import ajax from 'ic-ajax'`
`import AuthRoute from '../auth'`
WikiPageRoute = AuthRoute.extend
  setupController: (controller, model) ->
    controller.set 'isLoading', true
    return ajax('/api/wiki/pages/' + model._id).then (result) ->
      controller.set('model', result)
      controller.set 'isLoading', false

  model: (params) -> 
    return ajax('/api/wiki/pages/' + params.page_id)

  serialize: (model) -> 
    return { page_id: model._id }


`export default WikiPageRoute`