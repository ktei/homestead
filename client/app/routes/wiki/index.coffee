`import Ember from 'ember'`
`import ajax from 'ic-ajax'`
`import AuthRoute from '../auth'`

WikiIndexRoute = AuthRoute.extend
  model: ->
    return ajax('/api/wiki/pages')

`export default WikiIndexRoute`