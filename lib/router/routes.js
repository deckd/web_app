// **** POSTS ****
Router.route('/posts/:_id/edit', {
   name: 'editPost'
   // ,
   // controller: 'EditPostController'
});
Router.route('/posts/:_id', {
   name: 'showPost'
   // controller: 'ShowPostController'
});

// **** HOMEPAGE ****
Router.route('/', function(){
  this.render('slideShell');
});


