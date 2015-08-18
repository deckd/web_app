Template.saveForLater.onCreated(function(){
  AntiModals.overlay('loginModal');
});

Template.saveForLater.onRendered(function(){
   if(AntiModals.dismissOverlay('loginModal')){
     Router.go('home');
   };
});