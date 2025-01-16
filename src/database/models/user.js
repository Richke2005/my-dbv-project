const {Schema} = require('mongoose');

const userSchema = new Schema({
  image: String,
  age: Date,
  rg: String,
  blood_type: String,
  function: [String],
  talents: Number,
  classification: {
    type: String,
    required: [true, "The classification is required"],
    enum: {
      values: ["pathfinder", "leadership"],
      message:  "The classification '{VALUE}' is not a valid value"
    }
  },
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  medicines:[{
    name: String,
    quantity: Number,
    frequency: String,
    time: String,
    days: [String],
    notes: String
  }],
  club: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'clubs',
    },
    name: String,
    image: String,
  },
  class: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'classes',
    },
    name: String, 
    image: String
  },
  unit: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'units',
    },
    name: String,
    image: String
  }
},
{
  timestamps: true,
});

module.exports = userSchema;