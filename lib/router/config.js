Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

var createFromLocal = function(){

  if(Session.get("saveForLater")){
    if(!Meteor.userId() || Meteor.loggingIn()){
      this.render('Loading');
    } else {
      DkPosts.createFromLocal(); 
    };
  } else {
    this.next();
  };
   
};

Router.onBeforeAction(createFromLocal, {except: ['login']});
