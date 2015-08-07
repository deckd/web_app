Template.slideShell.onRendered ->
  # console.log(Session.get "slideContent")
  if (Session.get("slideContent") == undefined || Session.get("slideContent") == "")
    Session.set "editingSlide", true
  else
    Session.set "editingSlide", false
  
  if (Session.get("docTitle") == "")
    Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)

  document.title = Session.get("docTitle")


Template.slideShell.helpers
  editingSlide: ->
    Session.get "editingSlide"

  fullScreenActive: ->
    Session.get "fullScreenActive"
