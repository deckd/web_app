Template.slide.onCreated ->
  if (document.title == null || document.title == "")
    document.title = "Untitled"

# Template.slide.helpers
#   return Session.get("slideContent")

# Template.slide.helpers
#   slideContent: ->
#     return Session.get("slideContent")

Template.slide.events
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
      # Session.setPersistent("docTitle", docTitle)
      # Session.setPersistent("slideContent", rawContent)
  "click .clear-content": ->
    document.title = "Untitled"
