`import Ember from 'ember'`

Router = Ember.Router.extend {location: ClientENV.locationType}

Router.map(->
  @route 'resume'
  
  @resource 'wiki', ->
    @route 'page', { path: '/:page_id' }
    @route 'new'
    @route 'edit', { path: '/:page_id/edit' }
  
  @route 'login'
  @route 'notFound', { path: '404' }
)

`export default Router`
