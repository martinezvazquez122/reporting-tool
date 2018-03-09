var express = require ('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Import the mongoose module
var mongoDB = 'mongodb://localhost:27017/';

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
mongoose.connect(mongoDB)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var reports = require('./routes/client');

var port = 3000;

var app = express();

//View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);

// //Set Static Folder
// app.use(express.static(path.join(__dirname, 'views')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',reports);

app.listen(port, function(){
    console.log('Server started on port '+port);
});