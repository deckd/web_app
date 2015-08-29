// Router.configure({
//   layoutTemplate: 'mainLayout',
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound',
//   waitOn: function() { 
//     if(Meteor.userId()){
//       return Meteor.subscribe('posts');
//     };
//   }
// });


//TODO: move this to Dk namespace
// var createFromLocal = function(){

//   if(Session.get("savingForLater")){
//     // console.log("saving for later...");

//     if(!Meteor.userId() || Meteor.loggingIn()){
//       // console.log("signing in...");
//          this.next();

//       // this.render('loading');
//     } else {
//       // console.log("start create from local...");
//       DkPosts.createFromLocal(); 
//     };
//   } else {
//     this.next();
//   };
   
// };

// //TODO: move this to Dk namespace
// var getMyPosts = function(){

//   if(Meteor.userId()){
//     Meteor.subscribe('posts'); 
//   };

// }
// Router.onBeforeAction(createFromLocal, {only: ['home']});
