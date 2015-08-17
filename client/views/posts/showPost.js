Template.showPost.helpers({
  // someContent: function(){
  //   console.log(this);
  //   return this.first + " " + this.last;
  // }
});

Template.showPost.events({
  "click .click-to-edit":function(e){
    Router.go('editPost', { _id: Router.current().params._id });
  } 
});


// Template.viewSlide.events
//   "click .click-to-edit": (e) ->
//     e.preventDefault()
//     Session.set "editingSlide", true
