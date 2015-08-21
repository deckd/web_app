Template.mainLayout.onCreated(function(){

    if (Session.get("docTitle") === "" || Session.get("docTitle") == undefined) {
      Session.setPersistent("docTitle", DkConstants.TITLE_BLURB)
    };
 
    document.title = Session.get("docTitle")

});  
  
Template.mainLayout.helpers({

  editingPost: function(){
    return Session.get("editingPost");
  }

});