Template.slideFooter.helpers
  hasContent: ->
    if (Session.get("slideContent") != "")
      return true
    else
      return false

Template.slideControls.events
 
  "click .clear-content-btn": (e) ->
    e.preventDefault()
    Session.set "slideContent", ""
    $('textarea.clear-content').garlic('destroy')
    DkHelpers.setDocTitle(Session.get "slideContent")
    Session.set "editingSlide", true
