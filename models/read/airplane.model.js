const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const AirplaneReadSchema = new Schema({
 name: {
 type: String,
 required: true
 },
 maxCapicity: {
 type: Number,
 required: true
 },
}, {
	timestamps: true
});
 
const AirplaneRead = mongoose.model('airplaneRead', AirplaneReadSchema);
 
module.exports = AirplaneRead;