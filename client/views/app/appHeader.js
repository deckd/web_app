Template.appHeader.helpers({
  saveForLaterLink: function(){
    var currentView = Router.current().route.getName();

    // When viewing the homepage AND slide has content AND user is anonymous
    // Assumes that authenticated users will always be redirected to a id-based post
    //TODO: refactor - this is very fragile
    if( currentView == 'home' && Session.get("slideContent") != "" && !Meteor.userId() ){
      return true;
    } else {
      return false;
    }
  }
});

Template.appHeader.events({
  'click .save-for-later': function(e){
    e.preventDefault();
    Session.set("savingForLater", true);
    // Router.go('login');
    AntiModals.overlay('loginModal');
    // Router.go('save-for-later');
  },
  "click .logout": function (e,t) {
    e.preventDefault();
    Meteor.logout(function(error){
      if(error){
        alert(error);
      }
       Router.go('login');
    });
  }

});
