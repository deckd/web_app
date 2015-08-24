// **** POSTS ****

// TODO: refacor this to be as per the show view below
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

Router.route('/posts/:_id/', {
  name: 'showPost',
  template: 'postContent',
  loadingTemplate: 'loading',
  waitOn: function(){
    Meteor.subscribe('posts', this.params._id);
  },
  data: function () {
    return Posts.findOne({_id: this.params._id});
  },
  action: function () {
    this.render();
  }
});

// **** HOMEPAGE ****
Router.route('/', function(){
  this.render('postContent');
}, {name: 'home'});


// // **** Save for later ****
// Router.route('/save-for-later', function(){
//   this.render('saveForLater');
// }, {name: 'saveForLater'});

// **** LOGIN ****
Router.route('/login', {
   name: 'login'
});
