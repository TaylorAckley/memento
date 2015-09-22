UI.registerHelper("priorityOptions", function() {
    return [
        {label: "Critical", value: "Critical"},
        {label: "Urgent", value: "Urgent"},
        {label: "Moderate", value: "Moderate"},
        {label: "low", value: "low"}
    ];
});

UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});

// Use UI.registerHelper..
UI.registerHelper("formatDate", function(datetime) {
  if (moment) {
    // can use other formats like 'lll' too
    return moment(datetime).format("dddd, MMMM Do YYYY");
  }
  else {
    return datetime;
  }
});

UI.registerHelper("calendarDate", function(datetime) {
  if (moment) {
    // can use other formats like 'lll' too
    return moment(datetime).calendar();
  }
  else {
    return datetime;
  }
});

UI.registerHelper("daysSince", function(datetime) {
  if (moment) {
    // can use other formats like 'lll' too
    return moment(datetime).fromNow();
  }
  else {
    return datetime;
  }
});

UI.registerHelper("fbPic", function(size) {
  return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=" + size;
});
