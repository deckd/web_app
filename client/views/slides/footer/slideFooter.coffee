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
    
    Session.set("tmpContent", Session.get("slideContent"))
    Session.set("undoAction", true)
    Session.setPersistent "slideContent", ""

    clearContentAlert = sAlert.success('Deck content cleared', {effect: 'stackslide', position: 'bottom', timeout: 5000})
    Session.set "clearContentAlert", clearContentAlert
    DkHelpers.setDocTitle("")
    Session.set "editingSlide", true
