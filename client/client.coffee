Meteor.startup ->
  if document.title == ""
    document.title = "Untitled"

  # Session.get("slideContent")?
  #   Session.setDefaultPersistent(key, value)

  # console.log(document.title)

  # document.title = "Untitled"
