Template.slide.events
  "input .get-title": (e) ->
    e.preventDefault()
    # Session.set "WindowTitle", e.target.value
    document.title =  e.target.value
