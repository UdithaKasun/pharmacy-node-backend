/**
 * Created by Sakila Dissanayake on 7/1/2017.
 */

//Schema for add a batch
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var BatchSchema = new Schema ({
    drug_catrgory: String,
    drug_name: String,
    batch_no: String,
    type: String,
    quantity: Number,
    manufacture_date: String,
    expire_date: String
});

var Batch = mongoose.model('Batch',BatchSchema,'Batch');
module.exports = Batch;