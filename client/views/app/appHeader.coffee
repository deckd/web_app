Template.appHeader.events
  'click .create-post-from-local': ->
    # //- on user login
    # // - get data from session

    postId = Posts.insert
      title: Session.get "docTitle",
      content: Session.get "slideContent",
      updatedAt: new Date(),
      authorId: Meteor.userId()

    if postId?
      Session.setPersistent "docTitle", ""
      Session.setPersistent "slideContent", ""
      console.log("post id: #{postId}")
    
