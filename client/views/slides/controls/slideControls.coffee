Template.slideControls.helpers
  hasContent: ->
    if (Session.get("slideContent") != "")
      return true
    else
      return false

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
    Session.set "slideContent", ""
    $('textarea.clear-content').garlic('destroy')
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
