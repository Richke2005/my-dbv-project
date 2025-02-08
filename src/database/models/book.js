const {Schema} = require('mongoose');

const bookSchema = new Schema({
    image: String,
    title: {
        type: String,
        required: true,
    },
    class: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'classes',
            required: true
        },
        name: {
            type: String,
            required: true,
        }
    },
    content: [
        {
            requirement: {
                type: String
            },
            category: {
                type: String
            }
        }
    ]
},
{
    timestamps: true,
});

module.exports = bookSchema;