Template.postContent.onCreated(function(){

    if (Session.get("postContent") === ""){
      Session.set("editingPost", true);
    } else {
      Session.set("editingPost", false);
    };

});

Template.postContent.onRendered(function(){

  if(Session.get("saveForLater")){

    var newPostAlert = sAlert.info('Deck saved for later.', {
      effect: 'stackslide',
      position: 'bottom',
      timeout: 3000
    });

    Session.set("saveForLater", false);
  }
});

Template.postContent.helpers({

  editingPost: function(){
    // return Session.get("editingPost");
    return Session.get("editingPost");
  },
   
  postContent: function(){

    if(Router.current().route.getName() === 'showPost'){
      var post = Posts.findOne({_id: this._id});
      return post.content;
    } else {
      return Session.get("slideContent");
      // return Session.get("localContent");
    }

  }
});

Template.postContent.events({
  "click .click-to-edit":function(){

    if(Meteor.user()){
      Router.go('editPost', { _id: Router.current().params._id });
    } else {
      Session.set("editingSlide", true);
    };
  } 
});

