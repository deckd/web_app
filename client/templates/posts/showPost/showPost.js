Template.showPost.onCreated(function(){

  document.title = Session.get("docTitle");

  if(Router.current().route.getName() === 'showLocal' && !Meteor.userId()){
    Session.set("localPost", true);
  }

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
});

Template.showPost.onDestroyed(function(){
   Session.set("localPost", false);
});

Template.showPost.helpers({
  localPost: function(){
    return Session.get("localPost");
  },
  localContent: function(){
    return Session.get("localContent");
  }
});

Template.showPost.events({
  "click .edit-post":function(){

    //TODO: refactor - this is duplicated in appFooter.coffee
    if(Router.current().route.getName() === 'showLocal'){
      Router.go('home');
    } else {
      Router.go('editPost', { _id: Router.current().params._id });
    };
  }
});

