const mongoose = require("mongoose");

const parentsSchema = mongoose.Schema({

});

const parents = mongoose.model("parents", parentsSchema);

module.exports = parents;