const{Schema} = require('mongoose');

const clubSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    email: String,
    association: {
        type: String,
        required: true,
    },
    qtt_members: Number,
    social_networks: [{
        name: String,
        url: String
    }],
    address: {
        street: String,
        number: String,
        city: String,
        state: String,
        zip_code: String
    }
},
{
    timestamps: true,
});

module.exports = clubSchema;