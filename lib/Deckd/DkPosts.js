DkPosts = {
  saveLocalPost: function(){
    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    postId = Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
        Session.setPersistent("localContent", "");
        Session.set("docTitle", "");
        // Session.set("savingForLater", false);
        return result._id
      }
    });
    return postId;
  }
};