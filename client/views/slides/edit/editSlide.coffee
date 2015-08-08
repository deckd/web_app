Template.editSlide.onRendered ->
  $('.slide').focus()
  DkHelpers.autoPreview.reset()
  DkHelpers.autoPreview.start()

Template.editSlide.helpers
    slideContent: ->
      Session.get "slideContent"

Template.editSlide.events

  "input .auto-save-preview": (e) ->
    content = e.target.value
    Session.setPersistent "slideContent", content
    DkHelpers.setDocTitle(content)

    DkHelpers.autoPreview.reset()
    DkHelpers.autoPreview.start()

  # "input .get-content": (e) ->
  #   content = e.target.value
  #   Session.setPersistent "slideContent", content
  #   DkHelpers.setDocTitle(content)


  "blur .preview-on-blur": (e) ->
    # DkHelpers.previewOnBlur.start()
    Meteor.setTimeout((->
      if Session.get("slideContent") != ""
        Session.set("editingSlide", false)
    ), 300)

  # "input .auto-preview": (e) ->
  #   DkHelpers.autoPreview.reset()
  #   DkHelpers.autoPreview.start()

    # need to get the content right when the timer ends
    
    # reset the timer
    # wait 3s
    # set editingSlide to false
