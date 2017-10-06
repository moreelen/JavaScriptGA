var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var yearRegex = /^\d{4}$/;

var yearString = null;
var animal = null;
var element = null;

// Ask for birth year.
function getBirthYear(){
  prompt.get(['year'], function (err, result) {
    if (err) {
      return err;
    }

    yearString = result.year;

    // Verify data is correct.
    var isValidYear = yearRegex.test(yearString);

    if (isValidYear) {
      findAnimal(parseInt(yearString));
      findElement(parseInt(yearString));
      console.log('You are a: ' + element + ' ' + animal);
    } else {
      console.log('That was not a year.');
      getBirthYear();
    }

  });
}

// Looks for animal.
function findAnimal(year){
  var yearRemainder = year % 12;

  switch (yearRemainder) {
    case 4:
      animal = 'Rat';
      break;
    case 5:
      animal = 'Ox';
      break;
    case 6:
      animal = 'Tiger';
      break;
    case 7:
      animal = 'Rabbit';
      break;
    case 8:
      animal = 'Dragon';
      break;
    case 9:
      animal = 'Snake';
      break;
    case 10:
      animal = 'Horse';
      break;
    case 11:
      animal = 'Goat';
      break;
    case 0:
      animal = 'Monkey';
      break;
    case 1:
      animal = 'Rooster';
      break;
    case 2:
      animal = 'Dog';
      break;
    case 3:
      animal = 'Pig';
      break;
  }

  return animal;
}

// Looks for element.
function findElement(year){
  var yearRemainder = year % 5;

  switch (yearRemainder) {
    case 0:
      element = 'Water';
      break;
    case 1:
      element = 'Fire';
      break;
    case 2:
      element = 'Wood';
      break;
    case 3:
      element = 'Air';
      break;
    case 4:
      element = 'Metal';
      break;
  }

  return element;
}

// Prints animal and element.

getBirthYear();
