Template.slideShell.onRendered ->
  
  if (Session.get("slideContent") == "")
    Session.set "editingSlide", true
  else
    Session.set "editingSlide", false

# Template.slideShell.helpers
#   editingSlide: ->
#     editStatus = Session.get "editingSlide"
#     if editStatus
#       $('body').removeClass('view-mode')
#       return true
#     else
#       $('body').addClass('view-mode')
#       return false