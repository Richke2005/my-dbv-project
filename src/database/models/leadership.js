const {Schema} = require('mongoose');

const leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    function: String,
    email: String,
    image: String,
    club: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'clubs',
            required: true
        },
        name: String
    },
    led_class: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'classes',
            required: true
        },
        name: String
    },
    led_unit: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'units',
            required: true
        },
        name: String
    }
},
{
    timestamps: true,
});

module.exports = leadershipSchema;