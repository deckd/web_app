Meteor.methods({
  createPost: function(postAttributes){
    check(Meteor.userId(), String);
    check(postattributes, {
      title: String,
      content: String
    })

    var userId = Meteor.userId();

    var post = _.extend(postAttributes, {
      authorId: userId,
      updatedAt: new Date()
    });

    var postId = Posts.insert(post);

    return postId;
  }
});
