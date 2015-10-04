Accounts.onCreateUser(function(options, user) {
  if (user.emails) {
    var userEmail = user.emails[0].address;
    //var fromEmail = "TaylorAckley@gmail.com";
    //var subject = "Welcome";
    //var emailTxt = "Welcome or something";
    //Meteor.call("sendEmail", userEmail, fromEmail, subject, emailTxt);
    user.profile = options.profile;
    Meteor.setTimeout(function() {
Accounts.sendVerificationEmail(user._id);
  }, 2 * 3000);
    return user;
  }
  else if (user.services.facebook) {
    options.profile.handle = "@" + user.services.facebook.first_name + user.services.facebook.last_name;
    options.profile.name = user.services.facebook.first_name + " " + user.services.facebook.last_name;
    user.profile = options.profile;
    return user;
  }
  else if (user.services.twitter) {
    options.profile.handle = "@" + user.services.twittter.screenName;
    user.profile = options.profile;
    return user;
  }
  else if (user.services.github) {
    options.profile.handle = "@" + user.services.github.screenName;
    user.profile = options.profile;
    return user;
  }
  else if (user.services.google) {
    options.profile.handle = "@" + user.services.github.screenName;
    user.profile = options.profile;
    return user;
  }
    });


Accounts.onLogin(function(user) {
    Meteor.call("incrementLoginCnt", user.user._id);
    console.log("Logging in user");
    return user;
});

//Accounts.validateLoginAttempt(function(attempt) {
//  console.log(attempt);
  //console.log(attempt.user.emails[0].verified);
//  if(attempt.methodName == 'login' && !attempt.user.emails[0].verified) {
//    throw new Meteor.Error(403, "Your email is not verified.");
//  }

//  return true;
//});
