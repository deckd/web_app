Template.appHeader.helpers({
  saveForLater: function(){
    var currentView = Router.current().route.getName();

    if( currentView === 'home' && !Session.get("saveForLater") ){
      return true;
    } else {
      return false;
    }
  }
});

Template.appHeader.events({
  'click .save-for-later': function(){
    Session.set("saveForLater", true);
    Router.go('login');
    // AntiModals.overlay('loginModal');
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
