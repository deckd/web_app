Template.editPost.onCreated(function(){

  //Display locally stored content if user is anonymous
  if(!Meteor.userId()){
    Session.set("localPost", true);
  }

});

Template.editPost.onRendered(function(){

  if (Session.get("startSaveToAcct")){
    sAlert.info('The deck was saved to your account.', {effect: 'stackslide', position: 'bottom', timeout: 4500});
    Session.set("startSaveToAcct", false);
  }

});

Template.editPost.onDestroyed(function(){
  Session.set("localPost", false);
});

Template.editPost.helpers({

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
    DkPosts.checkIfEmpty(content);
    Session.setPersistent("localContent", content);
    DkHelpers.setDocTitle(content);
  },
  
  "input .db-save": function(e){
    var postContent = e.target.value;
    DkPosts.checkIfEmpty(content);

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
  "keydown .show-on-shift-return":function(e){
     e.preventDefault;

     if (e.keyCode === 13 && e.shiftKey){

       // TODO: refactor - this is duplicated in multiple locations

      if(Session.get("localPost")){
        Router.go('showLocal');
      } else {
        Router.go('showPost', { _id: Router.current().params._id });
      };
      
      return false;
    };
  } 
});
