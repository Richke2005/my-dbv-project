const {Schema} = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: String,
    image: String,
    posted_by: [
        {
            type: Schema.Types.ObjectId,
            ref: 'clubs',
        },
        {
            type: Schema.Types.ObjectId,
            ref: 'units',
        },
        {
            type: Schema.Types.ObjectId,
            ref: 'classes',
        },
        {
            type: Schema.Types.ObjectId,
            ref: 'users',
        }
    ]
}, {
    timestamps: true
});

module.exports = postSchema;