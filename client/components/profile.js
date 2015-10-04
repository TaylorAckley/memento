Template.profile.events({

      "click .deleteUser": function () {
        Meteor.call("deleteUser");
        Router.go('login');
      },
      "click .changePassword": function () {
        Session.set("changePassword", true);
      },
      "click .changePasswordCancel": function () {
        Session.set("changePassword", false);
      }
});

Template.profile.helpers({

  showChangePasswordClass: function() {
    var changePasswordSession = Session.get("changePassword");
    if (changePasswordSession) {
      return 'btn-info';
    }
    else {
      return 'btn-default';
    }
  },
  showChangePasswordForm: function() {
    return Session.get("changePassword");
  }

});
