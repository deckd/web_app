Template.viewSlide.onRendered ->

  if (Session.get("docTitle"))
    document.title = Session.get("docTitle")

# Template.slide.helpers
#   return Session.get("slideContent")

Template.viewSlide.helpers
  slideContent: ->
    return Session.get("slideContent")

Template.viewSlide.events
  "click .edit-content": (e) ->
    e.preventDefault()
    Session.set "viewingSlide", false
