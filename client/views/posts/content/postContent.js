Template.postContent.onCreated(function(){

    if (Session.get("slideContent") === ""){
      Session.set("editingSlide", true);
    } else {
      Session.set("editingSlide", false);
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
    return Session.get("editingSlide");
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

Template.showPost.events({
  "click .click-to-edit":function(e){
    Router.go('editPost', { _id: Router.current().params._id });
  } 
});

