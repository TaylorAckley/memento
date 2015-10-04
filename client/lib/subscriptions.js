Tracker.autorun(function () {
theNotes = Meteor.subscribe('theNotes');
userData = Meteor.subscribe('userData');
theFiles = Meteor.subscribe('files');
});
