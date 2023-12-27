const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
	id: {type: String},
	class_name: {
		type: String,
		required: [true, "The class name is required"]
	},
	dbv_quantity: {type: Number},
	class_frequency: {
		type: Number,
		min: [0, "The class frequency must be between 0 and 100"],
		max: [100, "The class frequency must be between 0 and 100"]
	},
	class_progress: {
		type: Number,
		min: [0, "The class frequency must be between 0 and 100"],
		max: [100, "The class frequency must be between 0 and 100"]
	},
	desbravadores: [{
		type: mongoose.Schema.Types.ObjectId, ref: "desbravadores",
		required: [true, "It's necessary to supply a dbv_ID"]
	}],
	cards: [{
		type: mongoose.Schema.Types.ObjectId, ref: "cards",
		required: [true, "It's necessary to supply a dbv_ID"]
	}],
	schedule_meetings: {
		type: Number,
		required: [true, "This parameter is required"]
	}

},
{
	timestamp: true
});

const classes = mongoose.model("classes", classSchema);

module.exports = classes;