Template.editPost.onRendered(function(){
  // $('#post_content').focus();
});

Template.editPost.helpers({
  postContent: function(){

    if(Router.current().route.getName() === 'editPost'){
      var post = Posts.findOne({_id: this._id});
      return post.content;
    } else {
      return Session.get("slideContent");
      // return Session.get("localContent");
    }

  }
});
