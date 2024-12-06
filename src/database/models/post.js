const {Schema} = require('mongoose');

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: String,
    image: String,
    posted_by: {
        club: {
            type: Schema.Types.ObjectId,
            ref: 'clubs',
        },
        unit: {
            type: Schema.Types.ObjectId,
            ref: 'units',
        },
        class: {
            type: Schema.Types.ObjectId,
            ref: 'classes',
        }
    }
}, {
    timestamps: true
});

module.exports = postSchema;