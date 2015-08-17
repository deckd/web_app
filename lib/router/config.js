Router.configure({
  layoutTemplate: 'slideLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// Router.onBeforeAction(function () {
//   if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
//     this.redirect('login');
//   } else {
//     this.next();
//   }
// });