const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxiwaySchema = new Schema({
    operationId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Taxiway', TaxiwaySchema);