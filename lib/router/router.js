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

// **** BEFORE HOOKS ****
var checkIfLocalContentOnLogin = function(){
  if(Meteor.loggingIn() && Session.get("localContent") !== ""){
    Session.set("startSaveToAcct", true);
  } 
  this.next(); 
};

var saveToAcct = function(){
  if(Meteor.userId() && Session.get("startSaveToAcct")){
    console.log("Saving to acct...");

    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
         console.log("create post error: " + error.reason);
      } else {
        Session.setPersistent("localContent", "");
        Session.set("docTitle", "");
        Session.set("startSaveToAcct", false);
        Session.set("newPostFromLocal", true);
        Session.set("newPostTitle", result.title);
        Router.go('editPost', { _id: result._id });
      }
    });

    // Session.set("newPostId", undefined);
    // Session.set("startSaveToAcct", false);
    // Session.set("redirectToNewPost", true);
    // DkPosts.saveToAcct();
  } else {
     this.next();
  };
  // this.next();
};
// var redirectToNewPost = function(){
//   if(Session.get("redirectToNewPost")){
//     if(Session.get("newPostId")){
//       console.log("Redirecting to new post...");
//        console.log("New post id: " + Session.get("newPostId"));
//       this.redirect('editPost', { _id: Session.get("newPostId") });
//       Session.set("newPostId", undefined);
//       Session.get("redirectToNewPost", false);
//     } else {
//       this.render('Loading');  
//     };  
    
//   } else {
//     console.log("did not redirect...");
//     this.next();
//   };
// };

var checkIfAnonymous = function(){
  if(!Meteor.userId()){
    this.redirect('home');
  } else {
    this.next();
  }
};

Router.onBeforeAction(checkIfLocalContentOnLogin);
Router.onBeforeAction(saveToAcct);
// Router.onBeforeAction(redirectToNewPost);
Router.onBeforeAction(checkIfAnonymous, {except: ['home']});

// **** POSTS ****
Router.route('/posts/:_id/edit', {
  name: 'editPost',
  template: 'editPost',
  loadingTemplate: 'loading',
  waitOn: function(){
    Meteor.subscribe('posts', this.params._id);
  },
  data: function () {
    return Posts.findOne({_id: this.params._id});
  },
  action: function () {
    Session.set("editMode", true);
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
    //TODO: refactor this out - not needed if using waitOn?
    return Posts.findOne({_id: this.params._id});
  },
  action: function () {
    Session.set("editMode", false);
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
    Session.set("editMode", true);
    this.render();
  }
});

// **** SHOW LOCAL CONTENT ****
Router.route('/show', {
  name: 'showLocal',
  template: 'showPost',
  action: function () {
    Session.set("editMode", false);
    this.render();
  }
});

// **** LOGIN ****
Router.route('/login', {
   name: 'login'
});
