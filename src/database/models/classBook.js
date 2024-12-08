const {Schema} = require('mongoose');

const classbookSchema = new Schema({
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
    book: [
        {
            requirement: {
                type: String
            },
            type: {
                type: String
            }
        }
    ]
},
{
    timestamps: true,
});

module.exports = classbookSchema;