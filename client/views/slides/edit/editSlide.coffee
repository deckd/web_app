Template.editSlide.onRendered ->
  $('.slide').focus()
  $('.slide').val(Session.get('slideContent'))

Template.editSlide.helpers

  # docTitle: ->
  #   if (Session.get("docTitle") != "")
  #     document.title = Session.get "docTitle"
  #   else
  #     document.title = "Untitled"  

Template.editSlide.events

  "input .get-content": (e) ->
    content = e.target.value
    Session.setPersistent "slideContent", content
    DkHelpers.setDocTitle(content)


  "blur .preview-on-blur": (e) ->
    e.stopPropagation()
    Session.setPersistent "slideContent", e.target.value
    Session.set "editingSlide", false

  # "input .auto-preview": (e) ->
  #   Session.setPersistent "slideContent", e.target.value
  #   dkHelpers.previewTimer.reset()
  #   dkHelpers.previewTimer.start()

    # need to get the content right when the timer ends
    
    # reset the timer
    # wait 3s
    # set editingSlide to false
