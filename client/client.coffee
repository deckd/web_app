Meteor.startup ->
  if document.title == ""
    document.title = "Untitled"

  console.log(document.title)

  # document.title = "Untitled"
