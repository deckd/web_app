Template.showPost.onCreated(function(){

  document.title = Session.get("docTitle");

  if(Router.current().route.getName() === 'showLocal' && !Meteor.userId()){
    Session.set("localPost", true);
  }

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
