const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeReadSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

const EmployeeRead = mongoose.model('employeeRead', EmployeeReadSchema);

module.exports = EmployeeRead;