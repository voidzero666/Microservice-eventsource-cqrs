const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AirplaneReplaySchema = new Schema({
	name: {
		type: String,
		required: true
	},
    maxCapicity: { //spellingsfout van andere service model overgenomen
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('AirplaneReplay', AirplaneReplaySchema);