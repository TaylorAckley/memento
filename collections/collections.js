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
    optional: true,
    autoform: {
          afFieldInput: {
            type: 'summernote',
            settings: {
              height: 250
            }
          }
        }
  },
  tags: {
    type: [String],
    autoform: {
      type: "select2",
      afFieldInput: {
        multiple: true,
        options: function() {
          tagsArray = [];
          ca = Notes.find({}, {tags: 1}).fetch();
          //can = _.flatten(_.pluck(ca, "tags"), true);
          can = _.chain(ca).map(function(it){return it.tags;}).flatten().uniq().value();
          can.forEach(function(it) {
              inner = {};
              inner.value = it;
              inner.label = it;
              tagsArray.push(inner);
          });
          console.log(tagsArray);
          return tagsArray;
        }
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
    defaultValue: false
  },
  location: {
    type: Schemas.addressSchema,
    optional: true
  },
  location2: {
    type: String,
    optional: true,
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: true,
        searchbox: true,
        autolocate: true
      }
    }
  },
  priority: {
    type: String,
    label: "Priority",
    autoform: {
      type: "select2",
      afFieldInput: {
        options: function() {
          return [
              {label: "Critical", value: "Critical"},
              {label: "Urgent", value: "Urgent"},
              {label: "Moderate", value: "Moderate"},
              {label: "low", value: "low"}
          ];
        }
      },

    },
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

},
file: {
  type: String,
  optional: true,
  denyInsert: true,
}

});

Schemas.addressSchema = new SimpleSchema({
  fullAddress: {
    type: String
  },
  lat: {
    type: Number,
    decimal: true
  },
  lng: {
    type: Number,
    decimal: true
  },
  street: {
    type: String,
    max: 100
  },
  city: {
    type: String,
    max: 50
  },
  state: {
    type: String,
    regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
  },
  zip: {
    type: String,
    regEx: /^[0-9]{5}$/
  },
  country: {
    type: String
  }
});

Notes.attachSchema(Schemas.Notes);
