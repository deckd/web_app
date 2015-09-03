Template.mainLayout.onCreated(function(){

    if (Session.get("docTitle") === "" || Session.get("docTitle") == undefined) {
      Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)
    };
 
    document.title = Session.get("docTitle")

});  

Template.mainLayout.helpers({

  editMode: function(){
    return Session.get("editMode");
  },
  showSideBar: function(){

    if (Meteor.userId()) {
      if(Router.current().route.getName() === 'home'){
        return false;
      } else {
        return true;
      };
    } else {
      return false;
    };
  }

});

Template.mainLayout.events({

  "click .toggle-sidebar": function(e){
     e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    
  }

});


// Template.mainLayout.onRendered(function(){

//   // if (Session.get("docTitle") === "" || Session.get("docTitle") == undefined) {
//   //   Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)
//   // };

//   // document.title = Session.get("docTitle");

// });
