Template.decksList.helpers({
  decks:function(){
    return Posts.find();
  }
});