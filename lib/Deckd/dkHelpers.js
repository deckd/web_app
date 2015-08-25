DkHelpers = {

  autoPreview: function(){
    var previewTimer;
    var previewDelay = 5000;

    this.start = function(){
      previewTimer = Meteor.setTimeout(function(){
        if (Session.get("slideContent") && Session.get("slideContent") != ""){
          Session.set("editingSlide", false);
        }
        
      }, previewDelay);
    };

    this.reset = function() {
      Meteor.clearTimeout(previewTimer);
    };

    return this;
  }()
  ,
  getPostTitle: function(content){    
    if (content === "") {

       return "Empty post";

    } else{

      var trimmedContent = content.replace(/^\s+|\s+$/g, "");
      var contentLines = trimmedContent.split("\n");
      var docTitle = contentLines[0].substring(0, 64);
      var cleanedUpDocTitle = DkHelpers.removeMarkdownChars(docTitle);

      return cleanedUpDocTitle;

    };

  },

  setDocTitle: function(content){
  //TODO: refactor this  
    if (content == "") {
       document.title = DkConstants.TITLE_BLURB;
    } else{
      var trimmedContent = content.replace(/^\s+|\s+$/g, "");
      var contentLines = trimmedContent.split("\n");
      var docTitle = contentLines[0].substring(0, 64);
      var cleanedUpDocTitle = DkHelpers.removeMarkdownChars(docTitle);
      Session.setPersistent("docTitle", cleanedUpDocTitle);
      // console.log('DocTitle: ' + Session.get("docTitle"));
    };

     document.title = Session.get("docTitle");
  },

  removeMarkdownChars: function(cleanedUpTitle){

    while(cleanedUpTitle[0] == "#"){
      cleanedUpTitle = cleanedUpTitle.substring(1, cleanedUpTitle.length);
    }
      return cleanedUpTitle;
  },

  undoDelete: function(content){
    Session.set("tmpContent", content);
  }


};

