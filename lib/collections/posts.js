Posts = new Mongo.Collection("posts");

Posts.allow({
  insert: function(userId, doc){
    return !! userId;
  },
  update: function(userId, doc){
    // check that user is signed in and user is the author
    return (!! userId) && (doc.authorId === userId);
  },
  remove: function(userId, doc){
    return (!! userId) && (doc.authorId === userId);
  }

});

Meteor.methods({
  
  createPost: function(postAttributes){
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      content: String
    })

    var userId = Meteor.userId();

    var post = _.extend(postAttributes, {
      authorId: userId,
      updatedAt: new Date()
    });

    var postId = Posts.insert(post);

    // console.log("Post Id: " + postId);
    return {
     _id: postId,
     title:postAttributes.title
    };
  },

  updatePost: function(postAttributes){


    check(Meteor.userId(), String);
    check(postAttributes, {
      postId: String,
      content: String,
      title: String
    })

    var post = Posts.findOne({_id: postAttributes.postId });

    if(post.authorId === Meteor.userId()){

      Posts.upsert(postAttributes.postId, {
        $set: { 
          content: postAttributes.content,
          title: postAttributes.title,
          updatedAt: new Date()  
        }
      });

    }
  }

});