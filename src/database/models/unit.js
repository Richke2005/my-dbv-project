const {Schema} = require('mongoose');

const unitSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    club: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'clubs',
            required: true
        },
        name: String
    },
    social_networks: [{
        name: String,
        url: String
    }]
},
{
    timestamps: true,
});

module.exports = unitSchema;