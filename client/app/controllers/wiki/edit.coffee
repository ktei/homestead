`import Ember from 'ember'`
`import Notify from 'ember-notify'`

WikiEditController = Ember.ObjectController.extend

  onSave: (params) ->
    self = @
    isNew = !params._id
    Ember.$.post('/api/wiki/pages', params)
      .success((result) ->
        Notify.success 'Wiki page is saved successfully.'
        if isNew
          self.transitionToRoute 'wiki.page', result._id
        else
          self.transitionToRoute 'wiki.page', self.get('model')
      )
      .fail(->
        alert 'Failed to save wiki page.'
      )
      .always(-> self.set 'isSaving', false)

  actions:
    save: ->
      self = @
      @set 'isSaving', true
      @onSave @getProperties(['_id', 'title', 'body'])

`export default WikiEditController`



