const {Schema} = require('mongoose');

const pathfinderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  rg: String,
  blood_type: String,
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
    name: String
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

module.exports = pathfinderSchema;