Template.appHeader.helpers({
  saveMsg: function(){
    var currentView = Router.current().route.getName();
    var localSaveMsg = DkConstants.LOCAL_SAVE_MSG;

    // Assumes that authenticated users will always be redirected to a id-based post

    if ( currentView == 'home' && !Meteor.userId()) {
      if(Session.get("localContent") === ""){
        return DkConstants.DFLT_LOCAL_SAVE_MSG;
      } else {
        return DkConstants.CHANGE_SAVED_LOCALLY_MSG;
      }

    } else{
       return "";
    };
  },
  saveToCloud: function(){
    if(Session.get("localContent") === ""){
      return false;
    } else {
      return true;
    }
  }
});

Template.appHeader.events({
  'click .sidebar': function(){
    $('.ui.sidebar').sidebar('show');

    // $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');

  },
  'click .modal-login, click .save-to-cloud': function(e){
    e.preventDefault();
    Session.set("savingForLater", true);
    // FlowRouter.go('login');
    AntiModals.overlay('modalLogin');

    // var overlay = document.getElementsByClassName("anti-modal-overlay")[0];
    // console.log(overlay);
    // Router.go('save-for-later');
  },
  "click .new-deck": function (e) {
    e.preventDefault();
    DkPosts.createPost();
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
