Template.slideControls.helpers
  editingSlide: ->
    Session.get "editingSlide"

  fullScreenActive: ->
    Session.get "fullScreenActive"

Template.slideControls.events
  "click .edit-slide": (e) ->
    e.preventDefault()
    Session.set "editingSlide", true

  "click .view-slide": (e) ->
    e.preventDefault()
    Session.set "editingSlide", false

  "click .clear-content": ->
    e.preventDefault()
    Session.setPersistent "slideContent", ""
    document.title = "Untitled"

  "click .toggle-fullscreen": (e) ->
    e.preventDefault()
    if (BigScreen.enabled)
      Session.set "fullScreenActive", !Session.get "fullScreenActive"
      BigScreen.toggle()

  # "keyup .toggle-fullscreen": (e) ->
  #   e.preventDefault()
  #   if (BigScreen.enabled)
  #     Session.set "fullScreenActive", !Session.get "fullScreenActive"
  #     BigScreen.toggle()

    # else {
    #     # fallback
    # }
