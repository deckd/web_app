DkPosts = {
    createPost: function(){
     var postAttributes = {
       title: "New Post",
       content: ""
     };

     Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        console.log(error.reason);
      } else {
        Router.go('editPost', {_id: result._id});
      };
    });
  },
  checkIfEmpty: function(content){
    if(content !== ""){
      Session.set("deckHasContent", true);
    } else {
       Session.set("deckHasContent", false);
    }
  }
};


  // saveToAcct: function(){
  //   var postAttributes = {
  //     title: Session.get("docTitle"),
  //     content: Session.get("localContent")
  //   };

  //   Meteor.call('createPost', postAttributes, function(error, result){
  //     if (error){
  //        console.log("create post error: " + error.reason);
  //     } else {
  //       Session.setPersistent("localContent", "");
  //       Session.set("docTitle", "");
  //       Session.set("newPostId", result._id);
  //       return;
  //     }
  //   });
  // },