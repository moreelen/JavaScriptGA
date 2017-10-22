var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var mongoose = require('mongoose');

var app = express();

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/first_servers', {
  useMongoClient: true,
});

promise.then(function(db) {
  console.log('DATABASE CONNECTED!!');
}).catch(function(err){
  console.log('CONNECTION ERROR', err);
});

// APPLICATION
var Schema = mongoose.Schema;

var carSchema = new Schema({
  name:  String,
});

var Car = mongoose.model('Car', carSchema);


app.get('/cars/:id?', function(req, res){
  var carId = req.params.id;
  var query = carId ? { _id:  carId } : {};  //ternary operator
  Car.find(query).exec(function(err, cars){
    if (err) {
      return res.status(500).send(err);
    }
    return res.json(cars);
  });
});

app.post('/cars', function(req, res){
  console.log('request body', req.body);

  var newCar = new Car(req.body);

  newCar.save(function(err, car) {
    if(err) {
      return res.status(500).send(err);
    }

    return res.status(201).json(car);
  });
});

app.put('/cars/:id', function(req, res){
  var carToBeUpdated = req.params.id;
  console.log('carToBeUpdated', carToBeUpdated);
  var updates = req.body;
  console.log('updates', updates);
  Car.findOneAndUpdate({
    _id: carToBeUpdated
  }, updates, function(err, cars, result){
    if (err) {
      return res.status(500).send(err);
    }
    console.log('cars', cars);
    console.log('result', result);
    return res.status(202).send('DONE');
  });
});

app.delete('/cars/:id', function(req, res){
  var carToBeDeleted = req.params.id;
  Car.remove({
    _id: carToBeDeleted
  }, function(err, car){
    if (err) {
      return res.status(500).send(err);
    }
    console.log('car', car);
    return res.status(202).send('DONE');
  });
});

app.listen(3333, function(){
  console.log('listening');
});
