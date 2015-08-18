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

Router.route('/posts/:_id/', {
  name: 'showPost',
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
  this.render('slideShell');
}, {name: 'home'});


// // **** Save for later ****
// Router.route('/save-for-later', function(){
//   this.render('saveForLater');
// }, {name: 'saveForLater'});

// **** LOGIN ****
Router.route('/login', {
   name: 'login'
   // ,
   // controller: 'LoginController'
});


// AccountsTemplates.configureRoute('saveForLater', {
//     redirect: function(){
//         var user = Meteor.user();
//         if (user)
//           Router.go('showPost', { _id: Router.current().params._id } );
//     }
// });

// AccountsTemplates.configureRoute('saveForLater', {
//     name: 'saveForLater',
//     path: '/login',
//     template: 'saveForLater',
//     redirect: '/',
// });


