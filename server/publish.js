Meteor.publish('theNotes', function() {
  //check(listId, String);

  return Notes.find({owner: this.userId});
});

Meteor.publish('userData', function () { return Meteor.users.find({_id: this.userId }, {fields: {profile: 1, services: 1, createdAt: 1, loginCount: 1}}); });
