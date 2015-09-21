Meteor.publish('theNotes', function() {
  //check(listId, String);

  return Notes.find({userid: this.userId});
});

//Meteor.publish('userData', function () { return Meteor.users.find({_id: this.userId }, {fields: {profile: 1, services: 1}}); });
