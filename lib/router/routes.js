// **** POSTS ****
Router.route('/posts/:_id/edit', function(){
  this.wait(Meteor.subscribe('posts', this.params._id));

  if (this.ready()){

    this.render('editPost', {
      data: function () {
        return Posts.findOne({_id: this.params._id})
      }
    });

  } else { 

    this.render('Loading');
  };
}, {name: 'editPost'});

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

}, {name: 'showPost'});

// **** HOMEPAGE ****
Router.route('/', function(){
  this.render('slideShell');
}, {name: 'home'});


// // **** Save for later ****
Router.route('/save-for-later', function(){
  this.render('saveForLater');
}, {name: 'saveForLater'});

// **** LOGIN ****
Router.route('/login', {
   name: 'login'
   // ,
   // controller: 'LoginController'
});