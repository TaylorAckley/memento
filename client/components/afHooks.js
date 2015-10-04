var detailUpdateHook = {
  onSuccess: function(operation, result) {
    console.log("success");
    console.log(operation);
    Session.set("isEditMode", false);
  }
};


AutoForm.hooks({
  updateNotesForm: detailUpdateHook
});
