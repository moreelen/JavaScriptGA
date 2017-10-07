var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var _pet_name = null;
var _mothersMaidenName = null; // Set them up so we know we are using them later.

console.log('What is the name of your first pet??');
// Prompt (which is Async) works like this:
prompt.get(['pet_name'], function (err, result) {
  if (err) { // Handle error
    return err;
  }

  _pet_name = result.pet_name; // Grab result and place it in variable.

  // Nested because it's async and we want them to run in order.
  console.log('What is your mother\'s maiden name?');
  prompt.get(['maiden_name'], function (err, result) {
    if (err) {
      return err;
    }

    _mothersMaidenName = result.maiden_name;

    console.log('Your porn star name is ' + _pet_name + ' ' + _mothersMaidenName);
  });

});
