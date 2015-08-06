Template.editSlide.onRendered ->
  if (!Session.get("docTitle"))
    document.title = "Untitled"
  else
    document.title = Session.get("docTitle")

  $('.slide').focus()
  $('.slide').val(Session.get('slideContent'))

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

  "blur .slide": (e) ->
    Session.setPersistent "slideContent", e.target.value
    Session.set "viewingSlide", true