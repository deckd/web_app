Template.viewSlide.helpers
  slideContent: ->
    return Session.get("slideContent")

Template.viewSlide.events
  "click .edit-content": (e) ->
    e.preventDefault()
    Session.set "editingSlide", true
