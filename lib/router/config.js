Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});


//TODO: move this to Dk namespace
var createFromLocal = function(){

  if(Session.get("savingForLater")){
    console.log("saving for later...");

    if(!Meteor.userId() || Meteor.loggingIn()){
      // console.log("signing in...");
         this.next();

      // this.render('loading');
    } else {
      // console.log("start create from local...");
      DkPosts.createFromLocal(); 
    };
  } else {
    this.next();
  };
   
};

Router.onBeforeAction(createFromLocal, {only: ['home']});
