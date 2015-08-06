BigScreen.onexit = ->
  Session.set "fullscreenActive", false

$(document).keyup (e) ->
  if (e.keyCode is 27)
    if (Session.get "fullScreenActive")
      Session.set "fullScreenActive", false