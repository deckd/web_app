Meteor.publish("posts", function(){
  var currentUserId = this.userId;  
  return Posts.find({authorId: currentUserId });
});

// TODO: Only publish tags for this author:
/// return Tags.find({authors: Meteor.userId() }); 

// Meteor.publish("userData", function () {
//   if (this.userId) {
//     return Meteor.users.find( {_id: this.userId},
//       {fields: 
//         {
//           "services.google.picture": true,
//           "services.google.name": true
//         }
//       });
//   } else {
//     this.ready();
//   }
// });
