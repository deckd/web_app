Meteor.publish('posts', function() {
  return Posts.find(); 
});
// Meteor.publish('votes', function() {
//   return Votes.find(); 
// });