Meteor.startup(function () {

  // See https://atmospherejs.com/kadira/blaze-layout
  // BlazeLayout.setRoot('body');
  // $('body').addClass('app-container');

  Session.setDefault({
    slideContent: "",
    deckHasContent: false,
    startSaveToAcct: false,
    savingToAcct: false,
    viewMode: false,
    editingPost: true,
    postContent: "",
    viewMode: "",
    localPost: false,
    docTitle: DkConstants.TITLE_BLURB
  });

});