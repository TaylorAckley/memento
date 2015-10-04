var doneCallback;

Accounts.onEmailVerificationLink(function(token, done) {
  Accounts.verifyEmail(token, function(error){
     if(!error) {
        Router.go('verifyEmailToken', {userToken: token});
     }
     else {
         console.log(error);
         Session.set("verificationEmailError", error);
         Router.go('verifyEmailToken', {userToken: token});
     }
  });
  doneCallback = done;  // Assigning to variable
});

Accounts.onResetPasswordLink(function(token, done) {
  Router.go('resetPassword', {userToken: token});
  doneCallBack = done;

});
