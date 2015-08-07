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
 
  "click .clear-content-btn": (e) ->
    e.preventDefault()
    $('textarea.clear-content').garlic('destroy')
    Session.set "slideContent", ""
    DkHelpers.setDocTitle(Session.get "slideContent")
    Session.set "editingSlide", true

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
