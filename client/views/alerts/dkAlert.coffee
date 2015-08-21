Template.dkAlert.helpers
  undoAction: ->
    Session.get "undoAction"

Template.dkAlert.events

  "click .undo-action": (e) ->
    e.preventDefault()
    sAlert.close(Session.get("clearContentAlert"))

    Session.setPersistent("postContent", Session.get("tmpContent"))

    Session.set "tmpContent", ""
    Session.set "undoAction", false

    DkHelpers.setDocTitle(Session.get("postContent"))
    
    Meteor.setTimeout((->
      sAlert.info('Content restored.', {effect: 'stackslide', position: 'bottom'})
    ), 500)