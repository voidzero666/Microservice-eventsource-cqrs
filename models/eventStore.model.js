const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	sEventType: {
		type: String,
		required: true
	},
	sObject: {
		type: mongoose.Mixed,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('eventStore', eventSchema);