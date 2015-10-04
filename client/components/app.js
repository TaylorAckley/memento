Template.app.helpers({

  notes: function() {
    console.log("User is: " + Meteor.userId());
    return Notes.find({isComplete: Session.get("hideCompleted")});
  },
  noteCount: function() {
      var noteCountInt = Notes.find({userid: Meteor.userId(), tags: Session.get("tagsFilter")}).count();
      if (noteCountInt === 1) {
        return "You have 1 note";
      }
      else if (noteCountInt === 0) {
        return "You have no notes";
      }
      else {
        return "You have " + noteCountInt + " notes";
      }

  }

});

Template.app.onCreated(function () {
  Session.set("notesFilter", "");
});

Template.app.events({

  "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("toggleChecked", this._id, ! this.isComplete);
      },
      "click .delete": function () {
        Meteor.call("deleteNote", this._id);
      },
      'click .setID': function () {
        Session.set("currentID", this._id);
      },
      'click .reset': function(event){
        console.log("Delete All Events!");
        Meteor.call("resetNotes");
}
});
