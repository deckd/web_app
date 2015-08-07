Meteor.startup ->
  if (Session.get "slideContent" == "")
    Session.set "editingSlide", true
  

