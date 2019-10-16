const { Schema, model } = require("mongoose");

const CarSchema = new Schema({
    placa: {
        type: String,
        required: true,
    },
    averages: [{
        average:{type: String },
        date: {type: Date, default: Date.now()}
    }],

})

module.exports = model('Car', CarSchema);