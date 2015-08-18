Router.configure({
  layoutTemplate: 'slideLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

// var saveForLater = function(){
//   if(Session.get("saveForLater")){
//     this.redirect('login');
//   } else {
//     this.next();
//   }
// };

var createFromLocal = function(){

  if(Session.get("saveForLater")){
    if(!Meteor.userId() || Meteor.loggingIn()){
      this.render('Loading');
    } else {
      DkPosts.createFromLocal(); 
    };
  } else {
    this.next();
  };
   
};

// var waitForLogin = function(){
//   if(!Meteor.userId() || Meteor.loggingIn()){
//     this.render('Loading');
//   } else {
//     this.next();
//   }
  
// };

// Router.onBeforeAction(saveForLater, {only: ['home']});
// Router.onBeforeAction(createFromLocal, {only: ['login']});
Router.onBeforeAction(createFromLocal, {except: ['login']});

// Router.onBeforeAction(function () {

//   if (Session.get("saveForLater")) {
     
//     var postAttributes = {
//       title: Session.get("docTitle"),
//       content: Session.get("slideContent")
//     };

//     Meteor.call('createPost', postAttributes,
//       function(error, result){
//         if (error) {
//           alert(error.reason);
//         } else{
          
//           Session.set("saveForLater", false);
//           Session.setPersistent("slideContent", "");
//           Session.set("docTitle", "");

//            this.redirect('showPost', {_id: result._id });
//            // console.log("New post: " + result._id)
//         };
//     });
//   } else {
//     this.next();
//   }
//   //   this.redirect('login');
//   // } else {
//   //   this.next();
//   // }

//   // if (Session.get("saveForLater")){

//   // }
//   //   if (!Meteor.userId() && || Meteor.loggingIn()) {
//   //   this.redirect('login');
//   // } else {
//   //   this.next();
//   // }

//   // if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
//   //   this.redirect('login');
//   // } else {
//   //   this.next();
//   // }
// });




// AccountsTemplates.configureRoute('signIn', {
//     layoutTemplate: 'slideLayout'
// });

// If saveForLater == true && isLoggingIn == true (?)

// Router.onBeforeAction(function () {
//   if (!Meteor.userId() && (Router.current().route.getName() !== 'login')) {
//     this.redirect('login');
//   } else {
//     this.next();
//   }
// });

// var mustBeSignedIn = function() {
//     if (!(Meteor.user() || Meteor.loggingIn())) {
//         Router.go('login');
//     } else {
//         this.next();
//     }
// };
// var goHome = function() {
//     if (Meteor.user()) {
//         Router.go('home');
//     } else {
//         this.next();
//     }
// };

// Router.onBeforeAction(mustBeSignedIn, {except: ['login']});
// Router.onBeforeAction(goHome, {only: ['index', 'login']});