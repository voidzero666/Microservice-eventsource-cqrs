const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxiwayReplaySchema = new Schema({
    operationId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('TaxiwayReplay', TaxiwayReplaySchema);