DkPosts = {
  createFromLocal: function(){
    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("slideContent")
    };

    Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
        Session.setPersistent("slideContent", "");
        Session.set("docTitle", "");

        Router.go('showPost', {_id: result._id});
      };
    });
  }
};