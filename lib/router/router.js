Router.configure({
  layoutTemplate: 'mainLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    if(Meteor.userId()){
      return Meteor.subscribe('posts');
    };
  }
});

var loggingIn = function(){
  if(Meteor.loggingIn()){
      console.log("signing in...");
       this.next();
   } else {
      this.next();
   };
};


// TODO: move this to Dk namespace
var createFromLocal = function(){

  if(Session.get("savingForLater")){
    // console.log("saving for later...");

    if(Meteor.loggingIn()){
        console.log("signing in...");
         this.next();

      // this.render('loading');
    } else {
      // console.log("start create from local...");
      DkPosts.createFromLocal(); 
    };
  } else {
    this.next();
  };
   
};

//TODO: move this to Dk namespace
var getMyPosts = function(){

  if(Meteor.userId()){
    Meteor.subscribe('posts'); 
  };

}

Router.onBeforeAction(loggingIn);



// **** POSTS ****
Router.route('/posts/:_id/edit', {
  name: 'editPost',
  template: 'editPost',
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
  template: 'showPost',
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
Router.route('/', {
  name: 'home',
  template: 'home',
  waitOn: function(){
    if (Meteor.userId()) {
      return Meteor.subscribe('posts');
    }
  },
  data: function () {
    if (Meteor.userId()) {
     return Posts.find({authorId: Meteor.userId()});
    }
  },
  action: function () {
    this.render();
  }
});


// // **** Save for later ****
// Router.route('/save-for-later', function(){
//   this.render('saveForLater');
// }, {name: 'saveForLater'});

// **** LOGIN ****
Router.route('/login', {
   name: 'login'
});
