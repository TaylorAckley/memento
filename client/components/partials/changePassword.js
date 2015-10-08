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
    },
    "click .generateStrongPassword": function(event) {
      event.preventDefault();
      var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
      var pass = "";
      var length = 8;
      for (var x = 0; x < length; x++) {
          var i = Math.floor(Math.random() * chars.length);
          pass += chars.charAt(i);
      }
      $('#password').html(pass);
    },

    "keyup #newPassword2": function(event) {
      var password1 = $("#newPassword").val();
      var password2 = $("#newPassword2").val();

      if (password1 != password2) {
        $('#passwordmatch').html('<i class="fa fa-check-circle-o red-text"></i>');
      }
      else {
        $('#passwordmatch').html('<i class="fa fa-check-circle-o dark-green-text"></i>');
      }
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
