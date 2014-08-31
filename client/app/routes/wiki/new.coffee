`import AuthRoute from '../auth'`

WikiNewRoute = AuthRoute.extend
  model: -> { title: '', body: '' }


`export default WikiNewRoute`