var R = require('ramda'); // Helps with {}s and []s http://ramdajs.com/docs/#find
var prompt = require('prompt');

var schema = {
  properties: {
    cardNo: {
      required: true
    },
    pin: {
      hidden: true,
      replace: '*'
    }
  }
}

prompt.start(); // Lets you prompt the user for info

// Dummy Users
var Users = [
  {
    name: 'Shad',
    cardNo: '123456789',
    pin: '1234',
    tries: 3,
    balance: 150
  },
  {
    name: 'Rosa',
    cardNo: '987654321',
    pin: '9876',
    tries: 3,
    balance: 500
  },
  {
    name: 'Sim',
    cardNo: 'Sims',
    pin: 'Motherloader',
    tries: 3,
    balance: 1000000
  }
]
var cardNo = null;
var pin = null;
var user = null;

// User inputs username and password. Check login.

// Display options and prompt answer

// Prompt (which is Async) works like this:
function login(){
  prompt.get(schema, function(err, result) {
      if (err) { // Handle error
          return err;
      }
      cardNo = result.cardNo;
      pin = result.pin;
      checkUser(cardNo);
      if (user !== null) {
        checkPassword();
      }
      else {
        console.log('Did not recognise username.');
        login();
      }
  });
}

function checkUser(inputUsername){
  for(i = 0; i < Users.length; i++) {
    if (Users[i].cardNo === inputUsername) {
      user = i;
      return user;
    }
  }
}

function checkPassword(){
  if (pin !== Users[user].pin){
    console.log('Incorrect pin.');
    Users[user].tries -=1;
    if (Users[user].tries > 0) {
      console.log('You have ' + Users[user].tries + ' tries left.');
      login();
    }
    else {
      console.log('You have no more tries left.');
    }
  }
  else {
    console.log('Welcome ' + Users[user].name);
    mainMenu();
  }
}

function mainMenu(){
  console.log('What would you like to do?');
  console.log('1 Check balance');
  console.log('2 Withdraw money');
  console.log('3 Exit');
  prompt.get(['option'], function(err, result) {
    if (err) {
      return err;
    }
    if (result.option === '1') {
      checkBalance();
    }
    else if (result.option === '2') {
      withdrawMoney();
    }
    else if (result.option === '3') {
      exit();
    }
    else {
      console.log('Please type in the corresponding number.');
      mainMenu();
    }
  });
}

function checkBalance() {
  console.log('You have £' + Users[user].balance);
  otherService();
}

function withdrawMoney() {
  console.log('How much would you like to withdraw?');
  prompt.get(['amount'], function(err, result) {
    if (Users[user].balance - result.amount < 0) {
      console.log('You do not have enough money in your account.');
      withdrawMoney();
    }
    else {
      Users[user].balance -= result.amount;
      console.log('You have withdrawn £' + result.amount);
      otherService();
    }
  });
}

function exit() {
  console.log('Logging you out...');
  console.log('You are logged out.');
}

function otherService() {
  console.log('Would you like to use another service? Y/N');
  prompt.get(['answer'], function(err, result) {
    if (err) {
      return err;
    }
    if (result.answer === 'Y') {
      mainMenu();
    }
    else {
      exit();
    }
  });
}

login();
