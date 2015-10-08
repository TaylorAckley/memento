Template.register.events({
    'submit .register-form': function (event) {

        event.preventDefault();

        var email = event.target.email.value;
        var password = s(event.target.password.value).trim().value();
        var password2 = s(event.target.password2.value).trim().value();
        var firstname = s(event.target.firstname.value).trim().capitalize().value();
        var lastname = s(event.target.lastname.value).trim().capitalize().value();
        var nameConc = firstname + " " + lastname;
        var handle = "@" + firstname + lastname;
        var defaultLogin = Number(0);

        var user = {
        email: email,
        password: password,
        profile: {
          name: nameConc,
          handle: handle,
          loginCount: Number(0)
        }

      };
        if (password != password2) {
          var passworderror = "Passwords don't match";
          $('#form-messages').html(passworderror);
      } else {
        Accounts.createUser(user,function(error){
            if(!error) {
                Router.go('/verifyEmail');
            }
            else {
              var message = "There was an error registering: <strong>" + error.reason + "</strong>";
                console.log(error);
                $('#form-messages').html(message);
            }
        });
      }
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
      $('#passwordreg').html(pass);
    },

    "keyup #password2": function(event) {
      var password1 = $("#password").val();
      var password2 = $("#password2").val();

      if (password1 != password2) {
        $('#passwordmatchreg').html('<i class="fa fa-check-circle-o red-text"></i>');
      }
      else {
        $('#passwordmatchreg').html('<i class="fa fa-check-circle-o dark-green-text"></i>');
      }
    }
});
