Template.login.events({
    'submit .login-form': function (event, template) {
        event.preventDefault();
        console.log("Logging in event: " + event);
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email,password,function(error){
            if(!error) {
                Router.go('/home');
            } else {
            var message = "There was an error logging in: <strong>" + error.reason + "</strong>";
              console.log(error);
              $('#form-messages').html(message);
            }

        });
    },

    'click .btn-facebook':function(event){
        event.preventDefault();
        Meteor.loginWithFacebook(function(err){
            if(!err) {
                Router.go('/home');
            }
        });
    },

    'click .btn-twitter':function(event){
        event.preventDefault();
        Meteor.loginWithTwitter(function(err){
            if(!err) {
                Router.go('/home');
            }
        });
    },

    'click .btn-github':function(event){
        event.preventDefault();
        Meteor.loginWithGitHub(function(err){
            if(!err) {
                Router.go('/home');
            }
        });
    },
    "click .forgotPassword": function (event) {
      event.preventDefault();
      console.log("clicked on forgotPassword");
      Session.set("forgotPassword", true);
    },
    "click .forgotPasswordCancel": function (event) {
      event.preventDefault();
      Session.set("forgotPassword", false);
    }

});

Template.login.helpers({
  getLoginFlag: function(){
    return Router.current().params.hash;
  },
  showforgotPasswordClass: function() {
    var forgotPasswordSession = Session.get("forgotPassword");
    if (forgotPasswordSession) {
      return 'btn-info';
    }
    else {
      return 'btn-default';
    }
  },
  showForgotPasswordForm: function() {
    return Session.get("forgotPassword");
  }
});
