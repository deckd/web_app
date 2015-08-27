Meteor.startup(function () {

  // See https://atmospherejs.com/kadira/blaze-layout
  BlazeLayout.setRoot('body');
  $('body').addClass('app-container');

  Session.setDefault({
    slideContent: "",
    saveForLaterLink: false,
    savingForLater: false,
    viewMode: false,
    editingPost: true,
    postContent: "",
    viewMode: "",
    localPost: false
  });

});