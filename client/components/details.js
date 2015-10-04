Template.details.events({

  "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("toggleChecked", this._id, ! this.isComplete);
      },
      "click .delete": function () {
        Meteor.call("deleteNote", this._id);
        Router.go('home');
      },
      "click .editMode": function () {
        Session.set("isEditMode", true);
      },
      "click .cancelDetailUpdate": function () {
        Session.set("isEditMode", false);
      }
});

Template.details.helpers({
  displayDescription: function() {
    if (this.description) {
      return UniHTML.purify(this.description);
    }
      else {
        return "No description set";
      }
    },
    displayDue: function() {
      if (this.due) {
        daysTo = moment(this.due).toNow();
        dueFormatted = moment(this.due).calendar();
        return "Due in " + daysTo + " " +  "(" + dueFormatted + ")";
      }
        else {
          return "No due date set";
        }
      },
      getEditMode: function() {
        return Session.get("isEditMode");
      },
      s2OptsDets: function () {
        return {tags: false, placeholder: 'Priority'};
      }
  });

  Template.details.onCreated(function () {
    Session.set("isEditMode", false);
  });

  Template.details.onDestroyed(function () {
    Session.set("isEditMode", false);
  });
