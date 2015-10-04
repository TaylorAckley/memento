Template.verifyEmailToken.helpers({
  getToken: function() {
    if (Router.current().params) {
    token = Router.current().params.userToken;
    return token;
  }
  else {
    return "No token detected";
  }
},
getError: function() {
  if(Session.get("verificationEmailError")) {
    var message = Session.get("verificationEmailError").reason + " Return login to resend the confirmation email";
    return message;
}
else {
  Meteor.setTimeout(function(){
    Router.go('home');

  }, 5000);
  return "Your email has been succesfully verified.";
}
}
});
