
Places = new Mongo.Collection('places');

Places.attachSchema(new SimpleSchema({

  notes: {
    type: String,
    optional: true
  },

  dateArrived: {
    type: Date,
    optional: true
  },

  dateLeave: {
    type: Date,
    optional: true
  },

}));
