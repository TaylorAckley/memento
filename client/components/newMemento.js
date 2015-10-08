Template.newMemento.helpers({
  s2Opts: function () {
    return {tags: true, tokenSeparators: [',', ' '], maximumSelectionSize: 3, placeholder: 'Tags'};
  }
});

Template.newMemento.onRendered(function () {
  var elem = document.querySelector('.js-switch');
  var init = new Switchery(elem, { size: 'small' });
});

Template.newMemento.events({

  "change .hideCompleted": function (event) {
        // Set the checked property to the opposite of its current value
        var checked = $(event.target).is(':checked');
        Session.setPersistent("hideCompleted", checked);
        console.log(Session.get("hideCompleted"));
      }
});
