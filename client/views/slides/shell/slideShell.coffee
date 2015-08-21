# Template.slideShell.onCreated ->
  
#   if (Session.get("slideContent") == "")
#     Session.set "editingSlide", true
#   else
#     Session.set "editingSlide", false

# Template.slideShell.helpers 
#   editingSlide: ->
#     Session.get "editingSlide"

