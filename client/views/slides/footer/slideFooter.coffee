Template.slideFooter.helpers
  hasContent: ->

    if Session.get("slideContent") != ""
      return true
    else
      return false
  helpText: ->
    if Session.get("slideContent") == ""
      DkConstants.DFLT_HELP
    else
      DkConstants.FORMATTING_HELP

Template.slideFooter.events
 
  "click .clear-content-btn": (e) ->
    Session.setPersistent "slideContent", ""
    sAlert.success('Deck cleared', {effect: 'stackslide', position: 'bottom-left'})
    # $('.clear-content').garlic('destroy')
    # console.log(Session.get "slideContent")
    DkHelpers.setDocTitle("")
    Session.set "editingSlide", true
