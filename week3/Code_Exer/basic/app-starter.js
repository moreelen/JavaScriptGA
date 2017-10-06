var prompt = require('prompt');
prompt.start(); // Lets you prompt the user for info

var _runningTotal = 0;
var _userBudget = null;

function getBudget(){
  console.log('What is your budget?');
  prompt.get(['budget'], function (err, result) {
    if (err) {
      return err;
    }

    _userBudget = parseInt(result.budget);
    console.log('The budget is: '+ _userBudget);

    getAmount();
  });
}

function getAmount(){
  console.log('Enter amount (whole pounds)');
  prompt.get(['amount'], function (err, result) {
    if (err) {
      return err;
    }

    // Check if it is a number.
    if(!isNaN(parseInt(result.amount))){
      var amount = parseInt(result.amount);
      // Check it doesn't exceed the budget. If yes: you can't buy.
      if (_userBudget - amount < 0){
        console.log('You will exceed your budget buying that!');
        getAmount();
      } else {
        _runningTotal += amount;
        _userBudget -= amount;
        console.log('Running total: ' + _runningTotal);
        console.log('Remaining budget: ' + _userBudget);
        getAmount();
      }
    }
    else {
      console.log('Please type in a number.');
      getAmount();
    }
  });
}

getBudget();
