/**
 * Created by Sakila Dissanayake on 7/1/2017.
 */

var express = require('express');
var Supplier = require('../models/SupplierModel');

var router = express.Router();

router.route('/supplier')
    //Add a Supplier
    .post(function(req, res){
        var supplier = new Supplier();
        supplier.supplier_name = req.body.supplier_name;
        supplier.email = req.body.email;
        supplier.contact = req.body.contact;
        supplier.drugs = req.body.drugs;

        supplier.save(function(err){
            if(err)
                res.send(err);
            res.json({message:'Supplier Added Successfully'});
        });
    })
    //Get all Supplier List
    .get(function(req,res){
        Supplier.find(function(err, suppliers){
            if(err)
                res.send(err);
            res.json(suppliers);
        });
    });

router.route('/supplier/:supplier_id')
    //Update a Supplier
    .put(function(req, res){
        Supplier.findById(req.params.supplier_id, function(err, supplier){
            if(err)
                res.send(err);

            supplier.supplier_name = req.body.supplier_name;
            supplier.email = req.body.email;
            supplier.contact = req.body.contact;

            supplier.save(function(err){
                if(err)
                    res.send(err);
                res.json({message: 'Supplier Updated Successfully'});
            });
        });
    })

    //Delete a Supplier
    .delete(function(req,res){
        Supplier.remove({
            _id:req.params.supplier_id }, function(err, supplier){
            if(err)
                res.send(err);
            res.json({message:'Supplier Deleted Successfully'})
        });
    });

module.exports = router;