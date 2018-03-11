var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Import the mongoose module
var mongoDB = 'mongodb://localhost:27017/bnotea';

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
mongoose.connect(mongoDB)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var client = require('./routes/clients');

var port = 3000;

var app = express();

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',client);

app.listen(port, function(){
    console.log('Server started on port '+port);
});