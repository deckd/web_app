Template.postContent.onRendered(function(){

  // Session.set("currentView", Router.current().route.getName());

  if (Session.get("editingPost")){
      $('#post_content').focus();
  }
  if(Session.get("saveForLater")){
    var newPostAlert = sAlert.info('Deck saved for later.', {
      effect: 'stackslide',
      position: 'bottom',
      timeout: 3000
    });
    Session.set("saveForLater", false);
  }
});

Template.postContent.onDestroyed(function(){
  Session.set("currentView", "");
});

Template.postContent.helpers({
  editMode: function(){
    return !Session.get("viewMode");
  },
  localContent: function(){
    if(FlowRouter.getRouteName() === 'showPost' || FlowRouter.getRouteName() === 'editPost'){
      return false;
    } else {
      return Session.get("localContent");
    }
  },
  localSave: function(){
    if(Session.get("currentView") === 'home'){
      return true;
    } else {
      return false;
    }
  }
});

Template.postContent.events({

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
    if(Session.get("localContent") !== ""){
      if (e.keyCode === 13 && e.shiftKey){
        Session.set("viewMode", true);
        return false;
      };
    };
  } 
});

