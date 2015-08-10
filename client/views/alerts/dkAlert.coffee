Template.dkAlert.helpers
  undoAction: ->
    Session.get "undoAction"

Template.dkAlert.events

  "click .undo-action": (e) ->
    e.preventDefault()
    sAlert.close(Session.get("clearContentAlert"))

    Session.setPersistent("slideContent", Session.get("tmpContent"))

    Session.set "tmpContent", ""
    Session.set "undoAction", false

    DkHelpers.setDocTitle(Session.get("slideContent"))
    Meteor.setTimeout((->
      sAlert.info('Deck content restored.', {effect: 'stackslide', position: 'bottom'})
    ), 500)