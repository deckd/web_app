Template.mainLayout.onCreated ->  
  # if (Session.get("editingSlide") == "")
  #   Session.set "showAppFooter", true
  # else
  #   Session.set "showAppFooter", false
  
  if (Session.get("docTitle") == "" || Session.get("docTitle") == undefined)
    Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)

  document.title = Session.get("docTitle")

Template.slideShell.helpers
  showAppFooter: ->
    Session.get "editingSlide"
