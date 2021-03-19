const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema; 

const flightSchema = new Schema({
    airline: String,
    flightNumber: Number,
    airport: String,
    departs: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);