// DkPosts = {
//   createPost: function(postAttributes){
//      var postAttributes = {
//        title: "New Post",
//        newPost: true,
//        content: ""
//      };

//      Meteor.call('createPost', postAttributes, function(error, result){
//       if (error){
//         alert(error.reason);
//       } else {
//         Session.set("hasContent", false);
//         // LogdPageTitles.setPageTitle(result._id,result.title);
//         Router.go('edipauset_post', {_id: result._id});
//       };
//     });
//   }
// }

  // title = Session.get "docTitle"
  //   content = Session.get "slideContent"
  //   # // - create a new post
  //   # // - clear data from the session
  //   # // - reroute to post page

  //   postAttributes = 
  //     title: Session.get "docTitle",
  //     content: Session.get "slideContent"

  //   postId = Meteor.call('createPost', postAttributes, (error, result) ->
  //     if error
  //       alert error.reason
  //   )

    // when the postId is returned, clear the content and route to new page

//     check(Meteor.userId(), String);
//     check(postattributes, {
//       title: String,
//       content: String
//     })

//     var userId = Meteor.userId();

//     var post = _.extend(postAttributes, {
//       authorId: userId,
//       updatedAt: new Date()
//     });