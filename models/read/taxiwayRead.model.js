const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxiwayReadSchema = new Schema({
    operationId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('TaxiwayRead', TaxiwayReadSchema);