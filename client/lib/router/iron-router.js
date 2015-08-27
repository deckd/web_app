// // **** POSTS ****

// Router.route('/posts/:_id/edit', {
//   name: 'editPost',
//   template: 'postContent',
//   waitOn: function(){
//     Meteor.subscribe('posts', this.params._id);
//   },
//   data: function () {
//     return Posts.findOne({_id: this.params._id});
//   },
//   action: function () {
//     this.render();
//   }
// });

// Router.route('/posts/:_id/', {
//   name: 'showPost',
//   template: 'postContent',
//   waitOn: function(){
//     Meteor.subscribe('posts', this.params._id);
//   },
//   data: function () {
//     return Posts.findOne({_id: this.params._id});
//   },
//   action: function () {
//     this.render();
//   }
// });

// // **** HOMEPAGE ****
// Router.route('/', {
//   name: 'home',
//   template: 'postContent',
//   waitOn: function(){
//     if (Meteor.userId()) {
//       return Meteor.subscribe('posts');
//     }
//   },
//   data: function () {
//     if (Meteor.userId()) {
//      return Posts.find({authorId: Meteor.userId()});
//     }
//   },
//   action: function () {
//     this.render();
//   }
// });


// // // **** Save for later ****
// // Router.route('/save-for-later', function(){
// //   this.render('saveForLater');
// // }, {name: 'saveForLater'});

// // **** LOGIN ****
// Router.route('/login', {
//    name: 'login'
// });
