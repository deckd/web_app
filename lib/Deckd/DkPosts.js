DkPosts = {
  createFromLocalContent: function(){
    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    var postId = Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
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