Template.postContainer.onCreated(function(){

    if (Session.get("slideContent") === ""){
      Session.set("editingSlide", true);
    } else {
      Session.set("editingSlide", false);
    };

});

Template.postContainer.helpers({

  editingSlide: function(){
    return Session.get("editingSlide");
  }
   
});
