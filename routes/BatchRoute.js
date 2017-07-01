/**
 * Created by Sakila Dissanayake on 7/1/2017.
 */
var express =  require('express');
var Batch = require('../models/BatchModel');

var router = express.Router();

router.route('/batch')
//Add new batch
    .post(function(req,res){
        var batch = new Batch();
        batch.drug_catrgory = req.body.drug_catrgory;
        batch.drug_name = req.body.drug_name;
        batch.batch_no = req.body.batch_no;
        batch.type = req.body.type;
        batch.quantity = req.body.quantity;
        batch.manufacture_date = req.body.manufacture_date;
        batch.expire_date = req.body.expire_date;

        batch.save(function(err){
            if(err)
                res.send(err);
            res.json({message:'Batch Added Successfully'});
        });
    })

//Get all batch details
    .get(function(req, res){
        Batch.find(function(err, batches){
            if(err)
                res.send(err);

        })
    })