const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FuelTankSchema = new Schema({
	currentFuelLevel: {
		type: Number,
		required: true
	},
	FuelCapacity: {
		type: Number,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Fueltank', FuelTankSchema);