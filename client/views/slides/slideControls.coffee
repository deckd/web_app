Template.slideControls.helpers
  editingSlide: ->
    Session.get "editingSlide"

Template.slideControls.events
  "click .edit-slide": (e) ->
    e.preventDefault()
    Session.set "editingSlide", true

  "click .view-slide": (e) ->
    e.preventDefault()
    Session.set "editingSlide", false

  "click .clear-content": ->
    Session.set "slideContent", ""
    document.title = "Untitled"

  # "click .view-deck": (e) ->
  #   e.preventDefault()
  #   slideContent = $('.slide').val()
  #   console.log("Done: #{ slideContent }")
  #   Session.setPersistent "slideContent", slideContent
  #   Session.set "viewingSlide", true