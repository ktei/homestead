`import Ember from 'ember'`

WikiNewController = Ember.Controller.extend
  titlePlaceholder: 'Give a title'

  textPlaceholder: 'Well... write some markdown'

  title: ''

  text: ''

  isSaving: false

  actions:
    save: ->
      self = @
      @set 'isSaving', true
      Ember.run.later(this, 
        (-> 
          alert('saved')
          self.set 'isSaving', false
        ), 
        1000)

`export default WikiNewController`