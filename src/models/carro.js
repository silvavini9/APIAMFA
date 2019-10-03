const { Schema, model } = require("mongoose");



const CarSchema = new Schema({
    InitialKilometer: {
        type: String, 
        required: true,
    },
    FinalKilometer: {
        type: String,
        required: true,
    },
    LitersFueled: {
        type: Int8Array,
        required: true,
    },
})

module.exports = model('Car', CarSchema);