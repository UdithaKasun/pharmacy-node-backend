/**
 * Created by Uditha Kasun on 7/1/2017.
 */

/**
 * Created by Uditha Kasun on 6/21/2017.
 */

var express = require('express');
var Book = require('../models/Book');

var BookRoute = express.Router();

// middleware that is specific to this router
BookRoute.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

// Get All Books
BookRoute.get('/', function (req, res) {
    Book.find({}, function (err, docs) {
        if(err){
            res.sendStatus(500);
            res.end();
        }
        else{
            res.json(docs);
        }
    });
});

//Get a Book Identified by Id
BookRoute.get('/:id', function (req, res) {
    Book.findById(req.params.id, function (err, books) {
        if(err){
            res.sendStatus(500);
        }
        else{
            if(books != null){
                res.json(books);
            }
            else{
                res.sendStatus(404);
            }

        }
    });
});


// Add New Book
BookRoute.post('/', function (req, res) {
    var book = new Book(req.body);

    book.save( (err,dbBook) => {
        if(err){
            res.sendStatus(500);
        }
        else{
            res.status(201).send({ _id : dbBook._id });
}
});
});

// Delete a Existing Book
BookRoute.delete('/:bookId', function (req, res) {


    Book.findByIdAndRemove({_id: req.params.bookId}, (err)=>{
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        else{
            res.sendStatus(204);
}
})

});

// Update Book
BookRoute.put('/:id', function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err)
            res.sendStatus(500);

        book.title = req.body.title;
        book.author = req.body.author;

        book.save(function (err, updatedBook) {
            if (err)
                res.sendStatus(500);
            res.json(updatedBook);
        });
    });
});

module.exports = BookRoute;
