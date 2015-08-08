Template.editSlide.onRendered ->
  $('.slide').focus()

Template.editSlide.helpers
    slideContent: ->
      Session.get "slideContent"

Template.editSlide.events

  "input .get-content": (e) ->
    content = e.target.value
    Session.setPersistent "slideContent", content
    DkHelpers.setDocTitle(content)


  "blur .preview-on-blur": (e) ->
    DkHelpers.previewOnBlur.start()

  # "input .auto-preview": (e) ->
  #   Session.setPersistent "slideContent", e.target.value
  #   dkHelpers.previewTimer.reset()
  #   dkHelpers.previewTimer.start()

    # need to get the content right when the timer ends
    
    # reset the timer
    # wait 3s
    # set editingSlide to false
