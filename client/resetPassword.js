Template.resetPassword.helpers({
  getToken: function() {
    if (Router.current().params) {
    token = Router.current().params.userToken;
    return token;
  }
  else {
    return "No token detected";
  }
}
});

Template.resetPassword.events({
  "click .resetPasswordCancel": function(event) {
    event.preventDefault();
    Router.go('login');
  },

  "submit form": function() {
    event.preventDefault();
    var newPassword = event.target.newPassword.value;
    var newPassword2 = event.target.newPassword2.value;
    var token = Router.current().params.userToken;
    console.log(token);
    if (newPassword === newPassword2) {
  Accounts.resetPassword(token, newPassword, function(error){
    if (error) {
      var message = error.reason;
      $('#form-messages').html(message);
    }
    else {
      var sucmessage = "Your password has been reset";
      $('#form-messages').html(sucmessage);
      Meteor.setTimeout(function(){
        Router.go('home');

      }, 5000);

    }
  });
}
  else {
    var failmessage = "Your password does not match";
    $('#form-messages').html(failmessage);
  }

  }
});
