Template.app.onRendered(function () {
  // Use the Packery jQuery plugin
  var $container = $('.packery').imagesLoaded( function() {
    // initialize Packery after all images have loaded
    $container.packery({
      gutter: '.gutter-sizer',
      itemSelector: '.item',
      columnWidth: '.grid-sizer',
      rowheight: ".item",
    });
  });

});

Template.app.helpers({

  notes: function() {
    console.log("User is: " + Meteor.userId());
    return Notes.find();
  }

});
