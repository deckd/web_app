Template.appFooter.helpers
  postContent: ->
    if Session.get("postContent") == ""
      return false
    else
      return true

  helpText: ->
    if Session.get("postContent") == ""
      DkConstants.FORMATTING_HELP

Template.appFooter.events

  "click .view-mode": ->

    Session.set 'viewMode', true

    if(Meteor.user())
      Router.go 'showPost', { _id: Router.current().params._id }
       
  "click .clear-content-btn": (e) ->
    
    Session.set("tmpContent", Session.get("postContent"))
    Session.set("undoAction", true)
    Session.setPersistent "postContent", ""

    clearContentAlert = sAlert.info('Content cleared.', {effect: 'stackslide', position: 'bottom', timeout: 4500})
    Session.set "clearContentAlert", clearContentAlert
    DkHelpers.setDocTitle("")
    Session.set "editingPost", true
