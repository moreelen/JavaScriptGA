var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var mongoose = require('mongoose');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/api_homework', {
  useMongoClient: true
});

promise.then(function(db) {
  console.log('Retrieved memories.');
}).catch(function(err){
  console.log('Error.', err);
});

// App here.
var Schema = mongoose.Schema;

var memorySchema = new Schema({
  author: String,
  age: Number,
  location: String,
  memory: String,
});

var memory = mongoose.model('memory', memorySchema);

app.listen(3333, function(){
  console.log('Searching for memories.');
});
