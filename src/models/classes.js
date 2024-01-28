const mongoose = require("mongoose");
const { verifyIsArrayAndNotEmpty } = require("../validations/models/");

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
	desbravadores: {
		type: [mongoose.Schema.Types.ObjectId], ref: "desbravadores",
		validate: {
			validator: verifyIsArrayAndNotEmpty,
			message: "0 pathfinders were provided"
		}
	},
	cards: {
		type: [mongoose.Schema.Types.ObjectId], ref: "cards",
		validate: { 
			validator: verifyIsArrayAndNotEmpty,
			message: "0 cards were provided"
		}
	},
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

