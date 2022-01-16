const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    rollNo: String,
    Name: String
},{collection: 'names'});

module.exports = mongoose.model('help', studentSchema);