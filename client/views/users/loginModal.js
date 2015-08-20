Template.loginModal.onDestroyed(function(){

  //here is where I can handle dismissing of the login modal
  console.log('the loginmodal was removed');

});

// Template.loginModal.helpers({
//   saveForLater: function(){
   
//     // if (Session.get("loginModal")) {} else{};
//   }

// });

// Template.body.helpers({
//   "click .anti-modal-overlay":function(e){
//     // e.stopPropagation();
//     console.log("overlay closed");
//   }

// });