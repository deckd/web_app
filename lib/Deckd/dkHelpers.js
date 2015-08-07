DkHelpers = {

  previewTimer: function(){
    var timer;
    var previewDelay = 2500;

    this.start = function(){
      timer = Meteor.setTimeout(function(){
        Session.set("editingSlide", false);
      }, previewDelay);
    };

    this.reset = function() {
      Meteor.clearInterval(timer);
    };

    return this;
  }(),

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

