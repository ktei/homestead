`import Ember from 'ember'`

Router = Ember.Router.extend {location: ClientENV.locationType}

Router.map(->
  @route 'resume'
  @resource 'wiki'
  @route 'wikiNew', { path: '/wiki/new' }
  @resource 'wikiPage', { path: '/wiki/:page_id' }
  @route 'login'
  @route 'notFound', { path: '404' }
)

`export default Router`
