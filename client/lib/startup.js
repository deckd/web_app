Meteor.startup(function () {
  $('body').addClass('app-container');

  Session.setDefault({
    slideContent: "",
    saveForLaterLink: false,
    savingForLater: false,
    viewMode: false,
    editingPost: true,
    postContent: "",
    viewMode: ""
  });

});