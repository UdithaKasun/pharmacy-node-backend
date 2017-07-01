
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presSchema = new Schema({
    doctor_name:  String,
    issued_medicine : String,
    how_to : String,
    duration : String,
    not_issuedDrugs : String
});

module.exports = mongoose.model('Prescription',presSchema);