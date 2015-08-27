Template.userNav.events({
  "click .logout": function (e,t) {
    e.preventDefault();
    Meteor.logout(function(error){
      if(error){
        alert(error);
      }
       FlowRouter.go('login');
    });
   
  }

});