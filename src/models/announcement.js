const mongoose = require("mongoose");

const announceSchema = mongoose.Schema({
    id: {type: String},
    theme: {type: String},
    title: {
        type: String,
        required: [true, "You need to provide a title to create a annoncement"]
    },
    text: {
        type: String,
        required: [true, "The body text is required to create one"]
    },
},
{
    timestamp: true
});

const announcement = mongoose.model("announcement", announceSchema);

module.exports = announcement;