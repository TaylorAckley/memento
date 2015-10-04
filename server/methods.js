Meteor.methods({
  getEnvironment: function(){
    console.log("Server environment is " + process.env.ROOT_URL);
      if(process.env.ROOT_URL == "http://localhost:3000/"){
          return 1;
      }else{
          return 2;
      }
    },
  addNote: function (doc) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    console.log(doc);
    Notes.insert(doc);
  },
  updateNote: function (doc, _id, error) {
    // Make sure the user is logged in before inserting a task
    if (error) {
      console.log(error.reason);
    }
        console.log(doc);
    Notes.update({
  _id: _id},
  doc
);
  },
  deleteNote: function (taskId) {
    Notes.remove(taskId);
  },

  resetNotes: function () {
    Notes.remove({});
  },
  toggleChecked: function (taskId, noteState) {
    Notes.update(taskId, { $set: { isComplete: noteState} });
  },

  incrementLoginCnt: function (userId) {   //  needs to be refactored to use $inc
      var currentUser = Meteor.users.findOne({_id: userId});
      if (currentUser.profile.loginCount) {
            var currentLoginCnt = currentUser.profile.loginCount + 1;
            console.log("Updating users login count from: " + currentUser.profile.loginCount + " to: " + currentLoginCnt);
            Meteor.users.update(currentUser, { $set: { "profile.loginCount": currentLoginCnt} });
      }
      else {
        Meteor.users.update(currentUser, { $set: { "profile.loginCount": 1} });
      }
  },

  sanitizeHTML: function (text) {
    return sanitizeHtml(text);

  },

  sendConfirmationEmail: function(_id) {
    Accounts.sendVerificationEmail(_id);
  },

  deleteUser: function() {
    Meteor.users.remove(this.userId);
  },


  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
console.log("Sending an email...");
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }

});
