`import Ember from 'ember'`

Router = Ember.Router.extend {location: ClientENV.locationType}

Router.map(->
  @route 'resume'
  
  @resource 'wiki', ->
    @route 'page', { path: '/:id' }
    @route 'new'
    @route 'edit', { path: '/:id/edit' }
  
  @route 'login'
  @route 'notFound', { path: '404' }
)

`export default Router`
