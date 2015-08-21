Template.appFooter.helpers
  hasContent: ->
    if Session.get("slideContent") != ""
      return true
    else
      return false

  helpText: ->
    if Session.get("slideContent") == ""
      DkConstants.FORMATTING_HELP

Template.appFooter.events

  "click .presentation-mode": ->

    if(Meteor.user())
      Router.go 'editPost', { _id: Router.current().params._id }
    else
      Session.set 'editingPost', false
 
  "click .clear-content-btn": (e) ->
    
    Session.set("tmpContent", Session.get("slideContent"))
    Session.set("undoAction", true)
    Session.setPersistent "slideContent", ""

    clearContentAlert = sAlert.info('Deck content cleared.', {effect: 'stackslide', position: 'bottom', timeout: 4500})
    Session.set "clearContentAlert", clearContentAlert
    DkHelpers.setDocTitle("")
    Session.set "editingSlide", true
