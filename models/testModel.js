/**
 * Created by Uditha Kasun on 7/1/2017.
 */

/**
 * Created by Uditha Kasun on 6/21/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title:  String,
    author : String
});

var Book = mongoose.model('Book',bookSchema,'Book');

module.exports = Book;