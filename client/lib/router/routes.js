// **** PUBLIC PAGES ****

var publicRts = FlowRouter.group();
// add homePublic, login, signup, passwordReset

// var getPosts = function() {
// }


publicRts.route('/', {
  name: 'home',
  triggersEnter: [
    function(){
      if (Meteor.userId()) {
        console.log("signed in user");
        // subscribe to this user's posts
      } else{
       // not needed, just for dev
        console.log("anon user");
      };
    }
  ],
  action: function(){
    // in app header, handle display for anon or current user, same with footer
    // same in home? conditional editPost vs myPosts
    BlazeLayout.render('home');
    console.log("We're on the public homepage");
  }
});

publicRts.route('/show', {
  name: 'showLocal',
  action: function(){
    BlazeLayout.render('showLocal');
    console.log("We're on the public show view");
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
