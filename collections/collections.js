Notes = new Mongo.Collection('notes');
var Schemas = {};

Schemas.Notes = new SimpleSchema({

  title: {
    type: String,
    label: "Title",
    max: 100,
    index: 1,
    autoform: {
      type: 'text',
      placeholder: 'Title'
    }
  },
  description: {
    type: String,
    label: "Description",
    max: 5000,
    optional: true,
    autoform: {
      type: 'textarea'
    }
  },
  tags: {
    type: [String],
    autoform: {
      type: "select2",
      afFieldInput: {
        multiple: true,
      },

    },
    label: "Tags",
    max: 40
  },
  due: {
    type: Date,
    label: "Due",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },
  isComplete: {
    type: Boolean,
    optional: true,
    denyInsert: true
  },
  priority: {
    type: String,
    label: "Priority",
    optional: true
  },
  owner: {
    type: String,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return Meteor.userId();
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },

  createdOn: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        var newDate = new Date();
        console.log(newDate);
        return newDate;
      }
        else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    denyUpdate: true,
    optional: true
    },
  updatedOn: {
    type: Date,
    autoValue: function() {
        if (this.isUpdate) {
          return new Date();
        }
      },
      denyInsert: true,
      optional: true
  },
  completedOn: {
    type: Date,
    optional: true,
    denyInsert: true
  },
img: {
  type: String,
  optional: true,
  autoValue: function() {
      if (this.isInsert) {
        var num = Math.floor(Math.random() * (14 - 1)) + 1;
        return num + ".jpg";
      }
    }

}

});

Notes.attachSchema(Schemas.Notes);
