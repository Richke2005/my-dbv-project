const {Schema} = require('mongoose');

const classbookSchema = new Schema({
    class_name: {
        type: String,
        required: true,
    },
    book:[
        {
            question_id: Schema.Types.ObjectId,
            requirement: String,
            type: String,
        }
    ]
},
{
    timestamps: true,
});

module.exports = classbookSchema;