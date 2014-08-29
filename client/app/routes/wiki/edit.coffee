`import Ember from 'ember'`
`import ajax from 'ic-ajax'`
`import AuthRoute from '../auth'`
WikiEditRoute = AuthRoute.extend

  model: (params) -> 
    return ajax('/api/wiki/pages/' + params.page_id)

  serialize: (model) -> 
    return { page_id: model._id }


`export default WikiEditRoute`