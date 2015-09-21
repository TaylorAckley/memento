Meteor.methods({
  addNote: function (doc) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    console.log(doc);
    Notes.insert(doc);
  },
  deleteNote: function (taskId) {
    Notes.remove(taskId);
  },
  toggleChecked: function (taskId, noteState) {
    Notes.update(taskId, { $set: { isComplete: noteState} });
  },

  incrementLoginCnt: function (userId) {
      var currentUser = Meteor.users.findOne({_id: userId});
      console.log(currentUser);
      var currentLoginCnt = currentUser.profile.loginCount + 1;
      console.log(currentLoginCnt);
      console.log("Updating users login count from: " + currentUser.profile.loginCount + " to: " + currentLoginCnt);
    Meteor.users.update(currentUser, { $set: { loginCount: currentLoginCnt} });

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
