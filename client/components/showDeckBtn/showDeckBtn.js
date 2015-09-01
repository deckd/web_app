Template.showDeckBtn.events({

  "click .show-deck": function(){

    // # TODO: refactor - this check for local vs post is duplicated in editPost and showPost
    Session.set("editMode", false);
    if(Session.get("localPost")){
      Router.go('showLocal');
    } else {
      Router.go('showPost', { _id: Router.current().params._id });
    };
  }

});  

