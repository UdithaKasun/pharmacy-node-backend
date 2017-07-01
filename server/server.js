
const express = require('express')
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var cors = require('cors')

mongoose.connect('mongodb://localhost/pharmDB');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/', function (req, res) {
//     res.sendFile('index.html',{ root: __dirname });
// })

app.use('/api',require('./routes/prescriptionRoute'));
// app.use('/api/Authors', require('./app/routes/AuthorRoute'))

var port=4000;
app.listen(port);
console.log("Listening on "+port);
module.exports = app;