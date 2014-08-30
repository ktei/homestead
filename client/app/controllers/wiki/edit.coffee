`import Ember from 'ember'`

WikiEditController = Ember.ObjectController.extend

  onSave: (params) ->
    self = @
    Ember.run.later(this, 
      (-> 
        alert('saved: ' + params._id + '|' + params.title + '|' + params.text)
        self.set 'isSaving', false
      ), 
      1000)

  actions:
    save: ->
      self = @
      @set 'isSaving', true
      @onSave @getProperties(['_id', 'title', 'text'])

`export default WikiEditController`