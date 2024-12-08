const {Schema} = require('mongoose');

const bookResponseSchema = new Schema({
    class_book: {
        question_id: {
            type: Schema.Types.ObjectId,
            ref: 'classbooks.book._id',
            required: true,
        },
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'classbooks',
            required: true,
        },
        name: {
            type: String,
            required: true
        },
    },

    pathfinder: {
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'pathfinders',
            required: true
        },
        name: String,
        response_date: Date 
    },
    response: {
        type: String,
        required: true,
    },
    image: String,
},
{
    timestamps: true,
});

module.exports = bookResponseSchema;