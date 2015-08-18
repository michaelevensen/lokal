
Items = new Mongo.Collection('items');

// Schema for Places
PlaceSchema = new SimpleSchema({
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

Items.attachSchema(new SimpleSchema({

  type: {
    type: String
  },

  published: {
    type: Boolean,
    optional: true
  },

  slug: {
		type: String,
		optional: true,
		autoValue: function() {
			var title = this.field('title');

			if(title.isSet)
				return _.slugify(title.value);
    },
	},

  place: {
    type: PlaceSchema,
    optional: true
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
