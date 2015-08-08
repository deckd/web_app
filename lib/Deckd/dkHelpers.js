DkHelpers = {

  autoPreview: function(){
    var previewTimer;
    var previewDelay = 4000;

    this.start = function(){
      previewTimer = Meteor.setTimeout(function(){
        if (Session.get("slideContent") != ""){
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

  // previewOnBlur: function(){
  //   var blurDelay = 300;

  //   this.start = function(){
  //     Meteor.setTimeout(
  //       function(){
  //         if(Session.get("slideContent") != "") {
  //           Session.set("editingSlide", false);
  //       }
  //     }, blurDelay);
  //   };

  //   return this;
  // }(),

  setDocTitle: function(content){    
    if (content == "") {
      Session.setPersistent("docTitle", DkConstants.TITLE_BLURB);
    } else{
      var trimmedContent = content.replace(/^\s+|\s+$/g, "")
      var contentLines = trimmedContent.split("\n")
      var docTitle = contentLines[0].substring(0, 64)
      Session.setPersistent("docTitle", docTitle)
      // console.log('DocTitle: ' + Session.get("docTitle"));
    };

     document.title = Session.get("docTitle");
  }

};

