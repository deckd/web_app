Template.slideShell.onRendered ->
  
  if (Session.get("slideContent") == undefined || Session.get("slideContent") == "")
    Session.set "editingSlide", true
  else
    Session.set "editingSlide", false
  
  if (Session.get("docTitle") == "" || Session.get("docTitle") == undefined)
    Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)

  document.title = Session.get("docTitle")



Template.slideShell.helpers
  editingSlide: ->
    editStatus = Session.get "editingSlide"
    if editStatus
      $('body').removeClass('view-mode')
      return true
    else
      $('body').addClass('view-mode')
      return false