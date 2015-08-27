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
