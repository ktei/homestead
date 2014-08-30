`import AuthRoute from '../auth'`

WikiNewRoute = AuthRoute.extend
  model: -> { _id: '', title: '', text: '' }


`export default WikiNewRoute`