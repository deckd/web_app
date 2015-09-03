DkPosts = {
  saveToAcct: function(){
    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
         console.log("create post error: " + error.reason);
      } else {
        Session.setPersistent("localContent", "");
        Session.set("docTitle", "");
        Session.set("newPostId", result._id);
        return;
      }
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