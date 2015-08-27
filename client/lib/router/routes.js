// **** PUBLIC PAGES ****

var publicRts = FlowRouter.group();
// add homePublic, login, signup, passwordReset

publicRts.route('/', {
  name: 'editPost',
  action: function(){
    BlazeLayout.render('editPost', {
      header: 'appHeader',
      main: 'editPost',
      footer: 'appFooter'
    });
    console.log("We're on the public homepage");
  }
});

publicRts.route('/show', {
  name: 'showPost',
  action: function(){
    BlazeLayout.render('showPost', {
      main: 'showPost'
    });
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
