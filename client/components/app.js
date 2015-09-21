Template.app.helpers({

  notes: function() {
    console.log("User is: " + Meteor.userId());
    return Notes.find();
  }

});
