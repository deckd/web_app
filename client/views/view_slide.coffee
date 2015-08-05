Template.viewer.onRendered ->

  if (Session.get("docTitle"))
    document.title = Session.get("docTitle")

Template.viewer.helpers
  slideContent: ->
    return Session.get("slideContent")

Template.viewer.events
  "click .edit-content": (e) ->
    e.preventDefault()
    Session.set "viewingSlide", false
