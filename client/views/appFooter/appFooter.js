Template.appFooter.helpers({

  editMode: function(){
    return Session.get("editMode");
  },

  helpText: function(){
    if (Session.get("localContent") === "") {
      return DkConstants.FORMATTING_HELP;
    };
  }

})

Template.appFooter.events({

  "click .edit-post": function(){
    // TODO: refactor - this check for local vs post is duplicated in editPost and showPost

    Session.set("editMode", true);

    if(Session.get("localPost")){
      Router.go('showLocal');
    }
    else {
      Router.go('showPost', { _id: Router.current().params._id });
    };
  },
      
  "click .clear-content-btn": function(e){

    // TODO: refactor - this check for local vs post is duplicated in editPost and showPost

    if(Session.get("localPost")){
      Session.set("tmpContent", Session.get("localContent"));

      Session.set("undoAction", true);
      Session.setPersistent("localContent", "");

      clearContentAlert = sAlert.info('Content cleared.', {effect: 'stackslide', position: 'bottom', timeout: 4500});

      Session.set("clearContentAlert", clearContentAlert);
      DkHelpers.setDocTitle("");
      Session.set("editMode", true);
    };

    // TODO: support db remove with undo

  }

});


   

