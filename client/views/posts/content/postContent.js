Template.postContent.onRendered(function(){

  Session.set("currentView", Router.current().route.getName());

  if (Session.get("editingPost")){
      $('#post_content').focus();
  }
  if(Session.get("saveForLater")){
    var newPostAlert = sAlert.info('Deck saved for later.', {
      effect: 'stackslide',
      position: 'bottom',
      timeout: 3000
    });
    Session.set("saveForLater", false);
  }
});

Template.postContent.onDestroyed(function(){
  Session.set("currentView", "");
});

Template.postContent.helpers({
  editMode: function(){
    return !Session.get("viewMode");
  },
  localContent: function(){
    if(Router.current().route.getName() === 'showPost' || Router.current().route.getName() === 'editPost'){
      return false;
    } else {
      return Session.get("localContent");
    }
  },
  localSave: function(){
    if(Session.get("currentView") === 'home'){
      return true;
    } else {
      return false;
    }
  }
});

Template.postContent.events({
  // want to retain local storage, but instead use garlic at this point?
  // else will need to append id to sesssion-var, will get complex to manage
  // need to add/remove local save if not on homepage
  // feels like maybe should be different templates

  "input .local-save": function(e){

    //TODO: only check this once on page rendered

    //can I differentiate the save target here and just have a single auto-save class?

    // if current route is 'home' - save to Session postContent
    // else save to db *and* save to Session postContent-id (Router.current().params._id)


    var content = e.target.value;
    Session.setPersistent("localContent", content);
    DkHelpers.setDocTitle(content);
  },
    "input .db-save": function(e){

    //TODO: only check this once on page rendered

    //can I differentiate the save target here and just have a single auto-save class?

    // if current route is 'home' - save to Session postContent
    // else save to db *and* save to Session postContent-id (Router.current().params._id)


    var content = e.target.value;
    Session.setPersistent("localContent", content);
    DkHelpers.setDocTitle(content);
  },
  "click .edit-mode":function(){
    Session.set("viewMode", false);
    if(Meteor.user()){
      Router.go('editPost', { _id: Router.current().params._id });
    };
  },
  "keydown .show-on-shift-return":function(e){
    e.preventDefault;
    if(Session.get("localContent") !== ""){
      if (e.keyCode === 13 && e.shiftKey){
        Session.set("viewMode", true);
        return false;
      };
    };
  } 
});

