Template.appHeader.events({
  'click .save-for-later': function(){
    Session.set("saveForLater", true);
    Router.go('login');
    // AntiModals.overlay('loginModal');
    // Router.go('save-for-later');
  }

});
