Template.editSlide.onRendered ->
  $('.slide').focus()


Template.editSlide.helpers
  slideContent: ->
     Session.get "slideContent"

Template.editSlide.events

  "focus .auto-save-preview": (e) ->
    $('body').removeClass('view-mode')

  "input .auto-save-preview": (e) ->
    content = e.target.value
    Session.setPersistent "slideContent", content
    DkHelpers.setDocTitle(content)

  "keydown .shift-return": (e) ->
    if (e.keyCode == 13 && e.shiftKey)
      Session.set("editingSlide", false)
      return false