Template.editPost.onRendered(function(){
  $('#post_content').focus();
});

Template.editPost.helpers({
  postContent: function(){
    var post = Posts.findOne({_id: this._id});

    return post.content;
  }
});
