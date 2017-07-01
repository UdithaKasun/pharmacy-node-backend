/**
 * Created by Sakila Dissanayake on 7/1/2017.
 */

//Schema for add a prescriptions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrescriptionSchema = new Schema({
    doctor_name: String,
    patient_name: String,
    date: String,
    drug_name: String,
    unit_type: String,
    dosage: String,
    frequency: String
});

var Prescription = mongoose.model('Prescription',PrescriptionSchema,'Prescription');
module.exports = Prescription;