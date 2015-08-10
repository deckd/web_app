Template.editSlide.onRendered ->
  $('.slide').focus()

  if Meteor.Device.isDesktop()
    DkHelpers.autoPreview.reset()
    DkHelpers.autoPreview.start()

Template.editSlide.helpers
  slideContent: ->
     Session.get "slideContent"

Template.editSlide.events

  "focus .auto-save-preview": (e) ->
    $('body').removeClass('view-mode')
    DkHelpers.autoPreview.reset()
    DkHelpers.autoPreview.start()

  "input .auto-save-preview": (e) ->
    content = e.target.value
    Session.setPersistent "slideContent", content
    DkHelpers.setDocTitle(content)

    if Meteor.Device.isDesktop()
      DkHelpers.autoPreview.reset()
      DkHelpers.autoPreview.start()

  "blur .preview-on-blur": (e) ->
    Meteor.setTimeout((->
      if Session.get("slideContent") && Session.get("slideContent") != ""
        Session.set("editingSlide", false)
    ), 300)
