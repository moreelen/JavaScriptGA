// CHALLENGE 1

// Make an object
var fish = {
  scales: 10,
  size: 5
};

// Make a copy
var secondFish = Object.assign({}, fish);

// Change the copy
secondFish.size = 20;

// Show that the original doesn’t change
console.log('fish', fish);
console.log('secondFish', secondFish);


// CHALLENGE 2

// Create object
var human = {
  wants: 'cake'
}

// Define property which cannot be deleted or modified (do in try...catch)
Object.defineProperty(human, 'views', {
  value: 'my own',
  writable: false,
  configurable: false,
  enumerable: true
})

try {
  human.views = 'your views';
  console.log('views', human.views);
} catch(err) {
  console.log('You cannot change my views! They are ' + human.views + '.');
}

// Create loop which shows the property is enumerable
for(const thing in human){
  console.log('thing', thing);
}


// CHALLENGE 3

// Create an array (using an built-in method) which logs all its keys
var hungry = [ 'cake', 'brownies', 'cookies'];

for (let prop in hungry){
  if (hungry.hasOwnProperty(prop)){
        console.log('key', prop);
      };
}

// Create an array (using an built-in method) which logs all its values
for (let prop in hungry){
  if (hungry.hasOwnProperty(prop)){
    console.log('value', hungry[prop]);
  }
}

// Create an array (using an built-in method) which logs [key, value]
for (let prop in hungry){
  if (hungry.hasOwnProperty(prop)){
    console.log(prop, hungry[prop]);
  }
}


// CHALLENGE 4

// Create two objects (a and b)
// Object a should have the properties firstname, lastname, age
// Object b should have the properties age and score
var a = {
  firstname: 'Rosa',
  lastname: 'Carbo',
  age: 25
}

var b = {
  age: 26,
  score: 9000
}

// Merge the second into the first, so that age from a overrides
// Object.assign(a, b);
// console.log(a);

// Do the same again, but now make the age from b override
// Object.assign(b, a);
// console.log(b);

// Make an entirely separate object and merge the values from a and b into it.
var c = Object.assign({}, a, b);
console.log(c);


// PROTOTYPAL INHERITANCE

//Create an object to represent a vehicle.
// The vehicle will have a type (originally set to ‘vehicle’) and a method called drive, which logs out ‘This <type> is driving’.
var vehicle = {}

vehicle.type = 'vehicle';
vehicle.drive = function() {
  console.log('This ' + this.type + ' is driving');
}

vehicle.drive();

// Create another object (with the vehicle as the prototype) for a motorbike
// The motorbike will have 2 wheels and its type will be set to ‘motorbike’
var motorbike = Object.create(vehicle);

motorbike.wheels = 2;
motorbike.type = 'motorbike';

motorbike.drive();

// Create another object (with the vehicle as the prototype) for a car
// The car will have 4 wheels and its type will be set to car
var car = Object.create(vehicle);

car.wheels = 4;
car.type = 'car';

car.drive();

// Push both into an array
var vehicles = [ ];

vehicles.push(motorbike, car);
console.log(vehicles);

// Iterate over the array to print out in the console: ‘A <type> has <n> wheels’
vehicles.forEach(function(element){
  console.log('A ' + element.type + ' has ' + element.wheels + ' wheels');
});

// Whilst iterating, call the drive method on each...
vehicles.forEach(function(element){
  console.log('A ' + element.type + ' has ' + element.wheels + ' wheels');
  element.drive();
});


// PSEUDO CLASSICAL

// Create a class for humans (with a name and a speak method, which logs ‘Hello my name is <name>’)
function Human(name) {
  this.name = name;
}

Human.prototype.speak = function() {
  return 'Hello my name is ' + this.name;
}

// Create a class for wizards that inherits from human (with a throwFireball method)
function Wizard(name) {
  this.name = name;
}

Wizard.prototype = new Human();
Wizard.prototype.constructor = Wizard;

Wizard.prototype.throwFireball = function() {
  return this.name + ' throws a fireball';
}

// Create a class for barbarians that inherits from human (with a berserkerRage method)
function Barbarian(name) {
  this.name = name;
}

Barbarian.prototype = new Human();
Barbarian.prototype.constructor = Barbarian;

Barbarian.prototype.beserkerRage = function() {
  return this.name + ' goes beserker RAAAAAGGGEEEEEEEEEE!!!'
}

// Create one instance of each class and log it out

var human = new Human('Human');
console.log(human);

var wizard = new Wizard('Wizard');
console.log(wizard);

var barbarian = new Barbarian('Barbarian');
console.log(barbarian);

// Make each one speak

console.log(human.speak());
console.log(wizard.speak());
console.log(barbarian.speak());

// Make the wizard throw a fireball
console.log(wizard.throwFireball());

// Make the barbarian go into ‘berserker RAAAAGGGEEE!!!!’ (which you might be experiencing by now! :D )
console.log(barbarian.beserkerRage());

// Make sure they can’t use each other’s special methods (try...catch again)
try {
  console.log(wizard.beserkerRage());
} catch(err) {
  console.log(wizard.name + ' does not know how to do this.');
}

try {
  console.log(barbarian.throwFireball());
} catch(err) {
  console.log(barbarian.name + ' does not know how to do this.');
}
