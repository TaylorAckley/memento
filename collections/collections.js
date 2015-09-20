Notes = new Mongo.Collection('notes');
var Schemas = {};

Schemas.Notes = new SimpleSchema({

  title: {
    type: String,
    label: "Title",
    max: 100,
    index: 1
  },
  description: {
    type: String,
    label: "Description",
    max: 5000
  },
  tags: {
    type: [String],
    label: "Tags",
    max: 40
  },
  due: {
    type: Date,
    label: "Due",
    optional: true
  },
  priority: {
    type: String,
    label: "Priority"
  },
  owner: {
    type: String
  },
  metadata: {
    type: [Object]
  },
  "metadata.$.createdOn": {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    denyUpdate: true
    },
  "metadata.$.updatedOn": {
    type: Date,
    autoValue: function() {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
  },
  "metadata.$.completedOn": {
    type: Date,
    optional: true,
    denyInsert: true
  },


});

Notes.attachSchema(Schemas.Notes);
