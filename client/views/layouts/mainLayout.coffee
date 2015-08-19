Template.mainLayout.onRendered ->  
  if (Session.get("slideContent") == "")
    Session.set "showAppFooter", true
  else
    Session.set "showAppFooter", false
  
  if (Session.get("docTitle") == "" || Session.get("docTitle") == undefined)
    Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)

  document.title = Session.get("docTitle")

# Template.slideShell.helpers
#   editingSlide: ->
#     editStatus = Session.get "editingSlide"
#     if editStatus
#       $('body').removeClass('view-mode')
#       return true
#     else
#       $('body').addClass('view-mode')
#       return false