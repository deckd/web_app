Template.editPost.onCreated(function(){

  //on home, this template only appears if no currentUser
  if(Router.current().route.getName() === 'home' && !Meteor.userId()){
    Session.set("localPost", true);
  }

});

Template.editPost.onDestroyed(function(){
  Session.set("localPost", false);
});

Template.editPost.helpers({

  //TODO: find a way to eliminate need for both localPost and localContent
  localPost: function(){
    return Session.get("localPost");
  },
  localContent: function(){
    return Session.get("localContent");
  }
});

Template.editPost.events({

  "input .local-save": function(e){
    var content = e.target.value;
    Session.setPersistent("localContent", content);
    DkHelpers.setDocTitle(content);
  },
  
  "input .db-save": function(e){
    var postContent = e.target.value;
    DkHelpers.setDocTitle(postContent);

    var postAttributes = {
      postId: Router.current().params._id,
      content: postContent,
      title: DkHelpers.getPostTitle(postContent)
    };

    Meteor.call('updatePost', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
      };
    });
  },
  "click .edit-mode":function(){
    Session.set("viewMode", false);
    if(Meteor.user()){
      // Router.go('editPost', { _id: Router.current().params._id });
    };
  },
  "keydown .show-on-shift-return":function(e){
    e.preventDefault;
    if(Session.get("localPost")){
      if (e.keyCode === 13 && e.shiftKey){
        Router.go('showLocal');
        return false;
      };
    };
  } 
});

  //   return true;
  // } else {
  //   return false;
  //   // return Session.get("localContent");
  // }

  // Session.set("currentView", Router.current().route.getName());

  // if (Session.get("editingPost")){
  //     $('#post_content').focus();
  // }
  // if(Session.get("saveForLater")){
  //   var newPostAlert = sAlert.info('Deck saved for later.', {
  //     effect: 'stackslide',
  //     position: 'bottom',
  //     timeout: 3000
  //   });
  //   Session.set("saveForLater", false);
  // }

