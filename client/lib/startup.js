Meteor.startup(function () {

  Session.setDefault({
    slideContent: "",
    saveForLaterLink: false,
    savingForLater: false,
    viewMode: false,
    editingPost: true,
    postContent: ""
  });

});