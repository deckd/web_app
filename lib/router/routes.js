// **** POSTS ****
Router.route('/posts/:_id/edit', {
   name: 'editPost',
   data: function () {
     return Posts.findOne(
       {_id: this.params._id}
     )
   }
});

Router.route('/posts/:_id/', function(){
  this.wait(Meteor.subscribe('posts', this.params._id));

  if (this.ready()){

    this.render('showPost', {
      data: function () {
        return Posts.findOne({_id: this.params._id})
      }
    });

  } else { 

    this.render('Loading');
  };

});

// **** HOMEPAGE ****
Router.route('/', function(){
  this.render('slideShell');
});