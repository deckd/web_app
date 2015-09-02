DkPosts = {
  createFromLocalContent: function(){
    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    console.log("about to create post");

    var postId = Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
        console.log("result: " + result);
        Session.setPersistent("localContent", "");
        Session.set("docTitle", "");
        Session.set("savingForLater", false);
        return result._id
      }
    });
    return postId;
  },
  checkIfEmpty: function(content){
    if(content !== ""){
      Session.set("deckHasContent", true);
    } else {
       Session.set("deckHasContent", false);
    }
  }
};