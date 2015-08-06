dkHelpers = {

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
  }()

};

