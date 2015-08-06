Template.editSlide.onRendered ->
  $('.slide').focus()
  $('.slide').val(Session.get('slideContent'))
  dkHelpers.previewTimer.start()

Template.editSlide.helpers
  slideContent: ->
    Session.get "slideContent"

Template.editSlide.events
  "input .get-title": (e) ->
    e.preventDefault()

    rawContent = e.target.value
    strippedContent = rawContent.replace(/^\s*|\s*$/g, '')

    if strippedContent == ""
      document.title = "Untitled"
    else
      contentLines = strippedContent.split "\n"
      docTitle = contentLines[0].substring(0, 64)
      document.title = docTitle
      Session.setPersistent("docTitle", docTitle)

  "blur .preview-on-blur": (e) ->
    Session.setPersistent "slideContent", e.target.value
    Session.set "editingSlide", false

  "input .auto-preview": (e) ->
    Session.setPersistent "slideContent", e.target.value
    dkHelpers.previewTimer.reset()
    dkHelpers.previewTimer.start()

    # need to get the content right when the timer ends
    
    # reset the timer
    # wait 3s
    # set editingSlide to false
