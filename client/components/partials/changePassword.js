Template.changePassword.events({
    'submit form': function (event) {
        event.preventDefault();
        var oldPassword = event.target.oldPassword.value;
        var newPassword = event.target.newPassword.value;
        var newPassword2 = event.target.newPassword2.value;

        if (newPassword === newPassword2) {
          Accounts.changePassword(oldPassword, newPassword, function(error){
            if (error) {
              console.log(error);
              var errormessage = error.reason;
              $('#form-messages').html(errormessage);
            }
            else {
              console.log("Password change success");
              var sucmessage = "Your password has been succesfully changed";
              $('#form-messages').html(sucmessage);
              Meteor.setTimeout(function() {
                Session.set("changePassword", false);
              },
            5000);
            }
          });
        }
        else {
          console.log("pw does not match");
          var passwordmatch = "Your password does not match";
          $('#form-messages').html(passwordmatch);
        }
    },
    "click .changePasswordCancel": function () {
      Session.set("changePassword", false);
    }
  });

  Template.changePassword.helpers({

    showChangePasswordButton: function() {
      if (!Session.set("changePassword")) {
        return "Change Password";
      }
      else {
        return "Cancel";
      }
    }

  });
