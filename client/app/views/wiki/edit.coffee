`import Ember from 'ember'`

WikiEditView = Ember.View.extend
  didInsertElement: ->
    # Enable tab in textarea
    textarea = Ember.$(@get('element')).find('textarea')
    textarea.keydown (e) ->
      keyCode = e.keyCode || e.which
      if keyCode is 9
        e.preventDefault()
        start = $(this).get(0).selectionStart
        end = $(this).get(0).selectionEnd

        $(this).val $(this).val().substring(0, start) + "\t" + $(this).val().substring(end)

        $(this).get(0).selectionStart = $(this).get(0).selectionEnd = start + 1

`export default WikiEditView`