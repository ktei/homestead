`import Ember from 'ember'`
`import ajax from 'ic-ajax'`
`import AuthRoute from '../auth'`
WikiEditRoute = AuthRoute.extend

  model: (params) -> 
    return ajax('/api/wiki/pages/' + params.id)

`export default WikiEditRoute`