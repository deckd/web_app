Template.mainLayout.onCreated ->  
  
  if (Session.get("docTitle") == "" || Session.get("docTitle") == undefined)
    Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)

  document.title = Session.get("docTitle")

Template.slideShell.helpers
  viewMode: ->
    !Session.get "editingSlide"
