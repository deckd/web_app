// **** POSTS ****

// TODO: refacor this to be as per the show view below
Router.route('/posts/:_id/edit', {
  name: 'editPost',
  template: 'postContent',
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

Router.route('/posts/:_id/', {
  name: 'showPost',
  template: 'postContent',
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
