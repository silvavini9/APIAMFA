const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
    placa: {
        type: String,
        required: true,
    },
    averages: [{
        type: String,
    }],
    dateAverages: [{
        type: Date,
        default: Date.now,
    }],
})

module.exports = model('Car', CarSchema);