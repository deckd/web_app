Template.editSlide.onRendered ->
  $('.slide').focus()
  # $('.slide').val(Session.get('slideContent'))

Template.editSlide.helpers

  docTitle: ->
    if (Session.get("docTitle") != "")
      document.title = Session.get "docTitle"
    else
      document.title = "Untitled"  

Template.editSlide.events

  "input .get-content": (e) ->
    content = e.target.value
    Session.setPersistent "slideContent", content
    DkHelpers.setDocTitle(content)
    #TODO: call get content here


  # "input .get-title": (e) ->
  #   rawContent = e.target.value
  #   strippedContent = rawContent.replace(/^\s*|\s*$/g, '')

  #   if strippedContent == ""
  #     document.title = "Untitled"
  #   else
  #     contentLines = strippedContent.split "\n"
  #     docTitle = contentLines[0].substring(0, 64)
  #     document.title = docTitle
  #     Session.setPersistent("docTitle", docTitle)

  # "blur .preview-on-blur": (e) ->
  #   e.stopPropagation()
  #   Session.setPersistent "slideContent", e.target.value
  #   Session.set "editingSlide", false

  # "input .auto-preview": (e) ->
  #   Session.setPersistent "slideContent", e.target.value
  #   dkHelpers.previewTimer.reset()
  #   dkHelpers.previewTimer.start()

    # need to get the content right when the timer ends
    
    # reset the timer
    # wait 3s
    # set editingSlide to false
