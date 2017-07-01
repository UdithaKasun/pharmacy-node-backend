/**
 * Created by Asitha JKR on 7/1/2017.
 */

var express = require('express');
var stock = require('../models/stockModel');

var stockRoute = express.Router();

//get all
stockRoute.get('/stock', function (req, res) {
    stock.find({}, function (err, stock) {
        if(err)
            res.sendStatus(err);

        res.json(stock);

    });
});


//update stock
stockRoute.put('/stock/:id', function (req, res) {
    stock.findById(req.params.id, function (err, book) {
        if (err)
            res.sendStatus(err);

        stock.currentStock = req.body.currentStock;

        stock.save(function (err,stock) {
            if (err)
                res.sendStatus(err);

            res.json({message:req.body.name+ ' stock updated'});
        });
    });
});