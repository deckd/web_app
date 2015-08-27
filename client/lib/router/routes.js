// **** GLOBAL ***
// FlowRouter.triggers.enter([cb1, cb2]);

  //  function(){
  //     if (Meteor.userId() || Meteor.loggingIn()) {
  //       console.log("signed in user");
  //       saveLocalPost();
        
  //       // subscribe to this user's posts
  //     } else{
  //      // not needed, just for dev
  //       console.log("anon user");
  //     };
  //   }
  // ]

function saveLocalPost() {
  if (Session.get("savingLocalPost")) {
    while (Meteor.loggingIn()) {
     // BlazeLayout.render('loading');
     console.log("signing in... ");
    }
  
    if (Meteor.userId()) {
       postId = DkPosts.saveLocalPost();
       Session.set("savingForLater", false);
       console.log("postId: " + postId);
       // FlowRouter.redirect('showPost', {_id: postId});

    } else{

      console.log("no user id");

    };
   
  } 
};

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

// **** PUBLIC PAGES ****

var publicRts = FlowRouter.group();
// add homePublic, login, signup, passwordReset

// var getPosts = function() {
// }


publicRts.route('/', {
  name: 'home',
  triggersEnter: [saveLocalPost],
  action: function(){
    BlazeLayout.render('home');
  }
});

publicRts.route('/show', {
  name: 'showLocal',
  action: function(){
    BlazeLayout.render('showLocal');
  }
});

// LOGIN
publicRts.route('/login', {
  name: 'login',
  action: function(){
    BlazeLayout.render('mainLayout', {
      main: 'login'
    });
  }
});

// **** POSTS ****

var postRoutes = FlowRouter.group({
  prefix: '/posts'
});

FlowRouter.route('/posts/:_id', {
  name: 'showPost',
  subscriptions: function(params){
    this.register('mypost', Meteor.subscribe('post', params._id));
  },
  action: function (params) {
   
    console.log("params: " + params);
    // BlazeLayout.render('showPost', {_id: params._id});
  }
});


