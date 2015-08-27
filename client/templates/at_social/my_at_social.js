Template.myAtSocial.replaces("atSocial");

Template.atSocial.helpers({
  socialButtonLabel: function() {   
    return DkTxtHelpers.capitalizeFirstLetter(this._id);
  }
});