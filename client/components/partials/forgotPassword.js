Template.forgotPassword.events({
    'submit form': function (event) {
        event.preventDefault();
        var email = event.target.forgotPasswordEmail.value;
        Accounts.forgotPassword({email: email}, function(error){
          if (error) {
            var message = error.reason;
            $('#forgotPassword-messages').html(message);
          }
          else {
            var sucmessage = "Please check your email";
            $('#frgotPassword-messages').html(sucmessage);
          }
        });
    },
    "click .forgotPasswordCancel": function () {
      Session.set("forgotPassword", false);
    }
  });

  Template.forgotPassword.helpers({

    showForgotPasswordButton: function() {
      if (!Session.get("changePassword")) {
        return "Change Password";
      }
      else {
        return "Cancel";
      }
    }

  });
