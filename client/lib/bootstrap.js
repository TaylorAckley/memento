Meteor.startup(function () {
// set keybindings only if we're in a testing environment.  In a real production environment this would be set in a uncommited JSON settings file.

Meteor.call("getEnvironment", function (error, result) {
  if (error) {
    console.log(error.reason);
  }
  else {
  console.log("Environment: " + result);
     if (result == 1) {
       console.log("testing keybindings set");
       Mousetrap.bind('alt+r', function()
       {
         Meteor.call("resetNotes");
         console.log("Notes collection has been cleared");
       });
     }
   }
});
	});
