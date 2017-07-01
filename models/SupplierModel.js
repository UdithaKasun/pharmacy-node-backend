/**
 * Created by Sakila Dissanayake on 7/1/2017.
 */


//Schema for add Suppliers
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SupplierSchema = new Schema({
    supplier_name: String,
    email: String,
    contact: Number,
    drugs: [{type:Schema.Types.ObjectId, ref: 'drugs'}]
});

var Supplier = mongoose.model('Supplier', SupplierSchema, 'Supplier');
module.exports = Supplier;