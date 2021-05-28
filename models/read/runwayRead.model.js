const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RunwayReadSchema = new Schema({
    operationId: {
        type: String,
        required: true
    },
	length: {
		type: Number,
		required: true
	},
	width: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('RunwayRead', RunwayReadSchema);