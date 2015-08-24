// Template.postContent.onCreated(function(){
// });

Template.postContent.onRendered(function(){
  if (Session.get("editingPost")){
      $('#post_content').focus();
  }
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
    return Session.get("editingPost");
  }, 
  localContent: function(){
    if(Router.current().route.getName() === 'showPost' || Router.current().route.getName() === 'editPost'){
      // var content = this.content;
      // console.log("post content: " + this.content);
      // var post = Posts.findOne({_id: this._id});
      return false;
    } else {
      return Session.get("postContent");
    }
  }
});

Template.postContent.events({
  "input .local-save": function(e){
    var content = e.target.value;
    Session.setPersistent("postContent", content);
    DkHelpers.setDocTitle(content);
  },
  "click .click-to-edit":function(){
    if(Meteor.user()){
      Router.go('editPost', { _id: Router.current().params._id });
    } else {
      Session.set("editingPost", true);
    };
  },
  "keydown .show-on-shift-return":function(e){
    e.preventDefault;
    if(Session.get("postContent") !== ""){
      if (e.keyCode === 13 && e.shiftKey){
        Session.set("editingPost", false);
        return false;
      };
    };
  } 
});

