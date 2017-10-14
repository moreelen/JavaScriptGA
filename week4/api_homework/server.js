var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var mongoose = require('mongoose');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create connection between app and database.
mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/api_homework', {
  useMongoClient: true
});

promise.then(function(db) {
  console.log('Retrieved memories.');
}).catch(function(err) {
  console.log('Error.', err);
});

// Create a model for the memories data.
var Schema = mongoose.Schema;

var memorySchema = new Schema({
  author: String,
  age: Number,
  location: String,
  memory: String,
});

var memory = mongoose.model('memory', memorySchema);

// Get all the memories.
app.get('/memories', function(req, res) {
  memory.find({}).exec(function(err, memories) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(memories);
  });
});

// Search for a memory by author.
app.get('/memories/:author', function(req, res) {
  memory.find({
    author: req.params.author
  }).exec(function(err, memories) {
    if (err) {
      return res.status(500).send(err);
    }
    if (!memory.length) {
      return res.status(404).send('No memories found.');
    }
    return res.json(memories);
  });
});

// Search for a memory by years.
app.get('/memories', function(req, res) {
  memory.find({
    age: { $gt: req.query.minAge, $lt: req.query.maxAge }
  }).exec(function(err, memories) {
    if (err) {
      return res.status(500).send(err);
    }
    if (!memory.length) {
      return res.status(404).send('No memories found.');
    }
    return res.json(memories);
  });
});

// Input a memory.
app.post('/memories', function(req, res) {
  var newMemory = new memory(req.body);
  newMemory.save(function (err, memory){
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(memory);
  });
});

// Delete a memory.
/* app.delete('/memories/:id', function(req, res) {
  var memoryDeleted = req.params.id;
  var newMemories = _.reject(memories, { '_id': memoryDeleted });
  if (memories.length === newMemories.length) {
    return res.status(404).send('Memory not found.');
  }
  memories = newMemories;
  return res.status(202).send('Memory deleted.');
}) */

app.listen(3333, function(){
  console.log('Searching for memories.');
});
