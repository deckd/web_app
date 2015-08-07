Template.slideShell.onRendered ->
  if (Session.get("docTitle") != "")
    Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)

  document.title = Session.get("docTitle")


Template.slideShell.helpers
  editingSlide: ->
    Session.get "editingSlide"

  fullScreenActive: ->
    Session.get "fullScreenActive"
