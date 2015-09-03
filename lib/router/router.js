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
var checkIfAnonymous = function(){
  if(!Meteor.userId()){
    this.redirect('home');
  } else {
    this.next();
  }
};

var checkIfLocalContentOnLogin = function(){
  if(Meteor.loggingIn() && Session.get("localContent") !== ""){
    Session.set("startSaveToAcct", true);
  } 
  this.next(); 
};

var saveToAcct = function(){
  if(Meteor.userId() && Session.get("startSaveToAcct")){

    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        console.log("create from local error: " + error.reason);
      } else {
        Session.setPersistent("localContent", "");
        Session.set("startSaveToAcct", false);
        Router.go('editPost', { _id: result._id });
      }
    });

  } else {
    this.next();
  };
  
};

Router.onBeforeAction(checkIfLocalContentOnLogin, {only: ['home', 'showPost']});
Router.onBeforeAction(saveToAcct, {only: ['home', 'showPost']});
Router.onBeforeAction(checkIfAnonymous, {except: ['home']});


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
