
Items = new Mongo.Collection('items');

Items.attachSchema(new SimpleSchema({

  type: {
    type: String
  },

  title: {
    type: String
  },

  origin: {
    type: String,
    optional: true
  },

  note: {
    type: String,
    optional: true
  }

}));
