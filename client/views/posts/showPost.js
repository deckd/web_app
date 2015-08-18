Template.showPost.onRendered(function(){

  if(Session.get("saveForLater")){

    var newPostAlert = sAlert.info('Deck saved for later.', {
      effect: 'stackslide',
      position: 'bottom',
      timeout: 3000
    });

    Session.set("saveForLater", false);
  }
});

Template.showPost.events({
  "click .click-to-edit":function(e){
    Router.go('editPost', { _id: Router.current().params._id });
  } 
});
