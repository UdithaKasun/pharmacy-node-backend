/**
 * Created by Uditha Kasun on 6/21/2017.
 */
const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors')

mongoose.connect('mongodb://localhost/pharmacyDB');

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: __dirname });
})

app.use('/api',require('./routes/SupplierRoute'));

app.listen(3000, function () {
    console.log('BookAPI app listening on port 3000!')
})

module.exports = app;