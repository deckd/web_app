Template.mainLayout.onCreated(function(){

    if (Session.get("docTitle") === "" || Session.get("docTitle") == undefined) {
      Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)
    };
 
    document.title = Session.get("docTitle")

});  

Template.mainLayout.helpers({

  editMode: function(){
    return Session.get("editMode");
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
