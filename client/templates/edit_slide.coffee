Template.editSlide.onRendered ->
  if (!Session.get("docTitle"))
    document.title = "Untitled"
  else
    document.title = Session.get("docTitle")
    console.log("Rendered: #{Session.get("slideContent")}")
      
  $('.slide').focus()
  $('.slide').val(Session.get('slideContent'))
# Template.slide.helpers
#   return Session.get("slideContent")

# Template.slide.helpers
#   slideContent: ->
#     return Session.get("slideContent")

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
      # Session.setPersistent("slideContent", rawContent)

  "click .clear-content": ->
    document.title = "Untitled"

  "blur .slide": (e) ->
    Session.setPersistent "slideContent", e.target.value
    console.log(Session.get("slideContent"))
    Session.set "viewingSlide", true
