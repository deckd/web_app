Template.slideShell.onRendered ->
  if (!Session.get("docTitle"))
    document.title = "Untitled"
  else
    document.title = Session.get("docTitle")


Template.slideShell.helpers
  editingSlide: ->
    Session.get "editingSlide"

  fullScreenActive: ->
    Session.get "fullScreenActive"
