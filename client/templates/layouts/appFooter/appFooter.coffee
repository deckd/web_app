Template.appFooter.helpers
  editMode: ->
    return !Session.get("viewMode")
    # if Session.get("localContent") == ""
    #   return false
    # else
    #   return true

  helpText: ->
    if Session.get("localContent") == ""
      DkConstants.FORMATTING_HELP

Template.appFooter.events

  "click .edit-post": ->
    # removed set view-mode false
    if(Session.get("localPost"))
      FlowRouter.go('showLocal')
    else
      FlowRouter.go 'showPost', { _id: FlowRouter.current().params._id }
       
  "click .clear-content-btn": (e) ->
    
    Session.set("tmpContent", Session.get("localContent"))
    Session.set("undoAction", true)
    Session.setPersistent "localContent", ""

    clearContentAlert = sAlert.info('Content cleared.', {effect: 'stackslide', position: 'bottom', timeout: 4500})
    Session.set "clearContentAlert", clearContentAlert
    DkHelpers.setDocTitle("")
    Session.set "editingPost", true
