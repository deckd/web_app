Template.appHeader.events({
  'click .create-post-from-local': function(){
    //console.log("Title: #{Session.get 'docTitle'}, Content: #{Session.get 'slideContent'}")

    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("slideContent")
    }

    Meteor.call('createPost', postAttributes,
      function(error, result){
        if (error) {
          alert(error.reason);
        } else{
          Session.setPersistent("slideContent", "");
           console.log("New post: " + result._id)
        };

    });
  }

});
