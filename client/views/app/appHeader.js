Template.appHeader.events({
  'click .save-for-later': function(){
    Session.set("saveForLater", true);
    Router.go('login');
    // AntiModals.overlay('loginModal');

    // Router.go('save-for-later');

 

    // only display link if no current user ()
    // display login modal overlay
    // wait for isLoggingin to return false


    
    //console.log("Title: #{Session.get 'docTitle'}, Content: #{Session.get 'slideContent'}")

    // var postAttributes = {
    //   title: Session.get("docTitle"),
    //   content: Session.get("slideContent")
    // }

    // Meteor.call('createPost', postAttributes,
    //   function(error, result){
    //     if (error) {
    //       alert(error.reason);
    //     } else{
    //       Session.setPersistent("slideContent", "");
    //        console.log("New post: " + result._id)
    //     };

    // });
  }

});
