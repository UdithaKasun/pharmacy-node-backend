

var express = require('express');
var prescription = require('../models/prescriptionModel');

var presRoute = express.Router();

// middleware that is specific to this router
// presRoute.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// });

// Get All prescriptions
presRoute.get('/prescription', function (req, res) {
    prescription.find({}, function (err, presc) {
        if(err)
            res.sendStatus(err);

        res.json(presc);

    });
});

//Get a prescription Identified by patient name
presRoute.get('/prescription/:patient_name', function (req, res) {
    prescription.find({name:req.params.patient_name}, function (err, books) {
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


// Add New prescription
presRoute.post('/', function (req, res) {
    var book = new prescription(req.body);

    book.save( (err,dbBook) => {
        if(err){
            res.sendStatus(500);
        }
        else{
            res.status(201).send({ _id : dbBook._id });
}
});
});

// Delete a Existing prescription
presRoute.delete('/:bookId', function (req, res) {


    prescription.findByIdAndRemove({_id: req.params.bookId}, (err)=>{
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        else{
            res.sendStatus(204);
}
})

});

// Update prescription
presRoute.put('/prescription/:id', function (req, res) {
    prescription.findById(req.params.id, function (err, book) {
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

module.exports = presRoute;
