/**
 * Created by Asitha JKR on 7/1/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stockSchema = new Schema({
    drug_name:  String,
    unit_type : String,
    category : String,
    price : String,
    quantity : String
});

module.exports = mongoose.model('Drug',drugSchema);
