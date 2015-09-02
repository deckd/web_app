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

var checkIfLocalContent = function(){
  if(Meteor.loggingIn() && Session.get("localContent") !== ""){
    Session.set("savingForLater", true);
  } 
  this.next(); 
};


var saveToAcct = function(){
  if(Meteor.userId() && Session.get("savingForLater")){

    var postAttributes = {
      title: Session.get("docTitle"),
      content: Session.get("localContent")
    };

    // var postId;

    Meteor.call('createPost', postAttributes, function(error, result){
      if (error){
        alert(error.reason);
      } else {
        console.log("result: " + result._id);
        Session.setPersistent("localContent", "");
        Session.set("docTitle", "");
        Session.set("savingForLater", false);

        Router.go('editPost', { _id: result._id });
      }
    });

  } else {
    this.next();
  };
  
};

Router.onBeforeAction(checkIfLocalContent);
Router.onBeforeAction(saveToAcct);

//TODO: move this to Dk namespace
var getMyPosts = function(){

  if(Meteor.userId()){
    Meteor.subscribe('posts'); 
  };

}


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
    this.render();
  }
});

// **** LOGIN ****
Router.route('/login', {
   name: 'login'
});


// // **** Save for later ****
// Router.route('/save-for-later', function(){
//   this.render('saveForLater');
// }, {name: 'saveForLater'});

// // TODO: move this to Dk namespace
// var createFromLocal = function(){

//   if(Session.get("savingForLater")){
//     // console.log("saving for later...");

//     if(Meteor.loggingIn()){
//       console.log("signing in...");
//       this.next();

//       // this.render('loading');
//     } else {
//       // console.log("start create from local...");
//       DkPosts.createFromLocal(); 
//     };
//   } else {
//     this.next();
//   };
   
// };
 // this.redirect('editPost', { _id: postId });

// var postId = DkPosts.createFromLocalContent();
// this.redirect('editPost', { _id: postId });
// Session.set("savingForLater", false);

