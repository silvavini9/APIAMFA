const { Schema, model } = require("mongoose");


const CarSchema = new Schema({
    Placa: {
        type: String,
        required: true,
    },
    Media: [{
        type: String,
        date: Date.now(),
    }],
})

module.exports = model('Car', CarSchema);