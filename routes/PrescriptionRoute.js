/**
 * Created by Sakila Dissanayake on 7/1/2017.
 */
var express = require('express');
var Prescription = require('../models/PrescriptionModel');

var router = express.Router();

router.route('/prescription')
//Add new Prescription
    .post(function (req, res){
        var prescription = new Prescription();
        prescription.doctor_name = req.body.doctor_name;
        prescription.patient_name = req.body.patient_name;
        prescription.date = req.body.date;
        prescription.drug_name = req.body.drug_name;
        prescription.unit_type = req.body.unit_type;
        prescription.dosage = req.body.dosage;
        prescription.frequency = req.body.frequency;

        prescription.save(function(err){
            if(err)
                res.send(err);
            res.json({message: 'Prescription Added Successfully'})
        });

    })

//Get all Prescription Details
    .get(function(req,res){
        Prescription.find(function(err, prescriptions){
            if(err)
                res.send(err);
            res.json(prescriptions);
        });
    });

router.route('/prescription/:prescription_id')
//Get prescription details by id
    .get(function(req,res){
        Prescription.findById(req.params.prescription_id, function(err,prescription){
            if(err)
                res.send(err)
            res.json(prescription);
        });
    })

    .delete(function(req,res){
        Prescription.remove({
            _id:req.params.prescription_id},function(err, prescrption){
            if(err)
                res.send(err);
            res.json({message: 'Prescription Deleted Successfully'})
        });
    });

module.exports = router;