`import Ember from 'ember'`
`import Notify from 'ember-notify'`

WikiPageController = Ember.ObjectController.extend
  isLoading: false
  actions:
    remove: ->
      self = @
      vex.dialog.confirm
        message: 'Are you absolutely sure you want to destroy the alien planet?'
        callback: (value) ->
          if value
            self.set 'isLoading', true
            id = self.get('_id')
            Ember.$.post("/api/wiki/pages/#{id}/delete")
              .success(->
                Notify.success 'Wiki page is deleted successfully.'
                self.transitionToRoute 'wiki.index'
              )
              .fail(->
                alert('Faield to delete wiki page')
              )
              .always(-> self.set 'isSaving', false)

`export default WikiPageController`
