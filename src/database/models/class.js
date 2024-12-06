const {Schema} = require('mongoose');

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: String,
    type: String,
    club: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'clubs',
            required: true
        },
        name: String
    }
},
{
    timestamps: true,
});

module.exports = classSchema;