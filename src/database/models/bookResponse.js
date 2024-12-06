const {Schema} = require('mongoose');

const bookResponseSchema = new Schema({
    class: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'classes',
            required: true
        },
        name: String
    },
    book: [
        {
            question_id: {
                type: Schema.Types.ObjectId,
                ref: 'classbooks.book.question_id',
                required: true
            },
            requirement: String,
            type: String,
        }
    ]
}, 
{
    timestamps: true,
});

module.exports = bookResponseSchema;