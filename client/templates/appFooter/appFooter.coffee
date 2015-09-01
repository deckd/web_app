Template.appFooter.helpers
  editMode: ->
    return !Session.get("viewMode")

  helpText: ->
    if Session.get("localContent") == ""
      DkConstants.FORMATTING_HELP

Template.appFooter.events

  "click .edit-post": ->
    # TODO: refactor - this check for local vs post is duplicated in editPost and showPost
    if(Session.get("localPost"))
      Router.go('showLocal')
    else
      Router.go 'showPost', { _id: Router.current().params._id }
       
  "click .clear-content-btn": (e) ->
    
    Session.set("tmpContent", Session.get("localContent"))
    Session.set("undoAction", true)
    Session.setPersistent "localContent", ""

    clearContentAlert = sAlert.info('Content cleared.', {effect: 'stackslide', position: 'bottom', timeout: 4500})
    Session.set "clearContentAlert", clearContentAlert
    DkHelpers.setDocTitle("")
    Session.set "editingPost", true
