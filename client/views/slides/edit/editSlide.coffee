Template.editSlide.onRendered ->
  $('.slide').focus()

Template.editSlide.helpers
    slideContent: ->
      Session.get "slideContent"

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


  # "blur .preview-on-blur": (e) ->
  #   e.stopPropagation()

  #   # delay .5s in case someone clicked on the clear button
  #   Meteor.setTimeout((

  #     content = e.target.value
  #     Session.setPersistent "slideContent", content

  #     if(content != "")
  #       Session.set "editingSlide", false

  #   ), 1000)



  # "input .auto-preview": (e) ->
  #   Session.setPersistent "slideContent", e.target.value
  #   dkHelpers.previewTimer.reset()
  #   dkHelpers.previewTimer.start()

    # need to get the content right when the timer ends
    
    # reset the timer
    # wait 3s
    # set editingSlide to false
