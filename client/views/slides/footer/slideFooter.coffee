Template.slideFooter.helpers
  hasContent: ->

    if Session.get("slideContent") != ""
      return true
    else
      return false

Template.slideFooter.events
 
  "click .clear-content-btn": (e) ->
    Session.set "slideContent", ""
    $('.clear-content').garlic('destroy')
    console.log(Session.get "slideContent")
    DkHelpers.setDocTitle("")
    Session.set "editingSlide", true
