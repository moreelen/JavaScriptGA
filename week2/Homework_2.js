// After each task, save the product/updated object to a variable and console log it.
/* 1. Create a structure to represent your friends ( w/ 'name', 'age', 'gender' &
'hasCake' as properties)*/
var friends = [
  {
    name: 'Tim',
    age: 29,
    gender: 'male',
    hasCake: true
  },
  {
    name: 'Shad',
    age: 20,
    gender: 'male',
    hasCake: true
  },
  {
    name: 'James',
    age: 25,
    gender: 'male',
    hasCake: false
  }
];

/* 2. Create a `hasBirthday` function that you can pass a name to and it will
increase the age of the person by one. */
var hasBirthday = function(age) {
  age += 1;
  return age;
}
console.log(hasBirthday(friends[0].age));

// 3. Create a function that gets their combined age.
var totalAge = 0;
var sumAge = function(friendNumber) {
  totalAge += friends[friendNumber].age;
}

for (i = 0; i < friends.length; i += 1) {
  sumAge(i);
}
console.log(totalAge);

/* 4. Create a function which returns an object showing how many male and female
friends you have. (I don't support a gender binary, this is just for exercise)*/
var genders = {
  male: 0,
  female: 0
}

var countGender = function(friendNumber) {
  if (friends[friendNumber].gender === 'male'){
    genders.male += 1;
  }
  else if (friends[friendNumber].gender === 'female'){
    genders.female += 1;
  }
}

for (j=0; j < friends.length; j += 1) {
  countGender(j);
}

console.log(genders);

// 5. Create a function which allows you to add a friend
var addFriend = function() {
  var name = prompt('name');
  var age = prompt('age');
  age = parseInt(age);
  var gender = prompt('male or female?');
  var hasCake = prompt('has cake?');
  if (hasCake === 'yes') {
    hasCake = true;
  }
  else if (hasCake === 'no') {
    hasCake = false;
  }
  friends[friends.length] = {
    name: name,
    age: age,
    gender: gender,
    hasCake: hasCake
  }
  console.log(friends[friends.length - 1]);
}

/* 6. OPTIONAL TRICKY CHALLENGE: Create a variable which holds an amount of cake
slices. Create a function that distributes the cake slices and returns those who did
not get cake as an array. If cake slices are more than the number of people then
return the amount of surplus cake */
var cakeSlices = 1;
var cakeless = [ ];
var clean = function(cleaner) {
  friends[cleaner].hasCake = false;
}

var giveCake = function(cake) {
  friends[cake].hasCake = true;
  cakeSlices -= 1;
}

var noCake = function(noCake) {
  cakeless.push(friends[noCake].name);
}

for (k = 0; k < friends.length; k += 1) {
  clean(k);
  if (cakeSlices > 0) {
    giveCake(k);
  }
  else if (cakeSlices === 0) {
    noCake(k);
  }
}

/* Create and run another function which takes in the array or number produced by the
function above (test with 'typeof') and returns one of 3 strings:
 a) 'Cake was evenly distributed'
 b) 'There are <n> pieces of extra cake'
 c) '<name>, <name> and <name> don't have any cake.
 save to var and console log it out. */
var distribution = function(cakeSlice) {
  if (cakeSlice === 0 && cakeless.length > 0) {
    return cakeless + ' is cakeless!';
  }
  else if (cakeSlice > 0) {
    return 'There are ' + cakeSlice + ' pieces of extra cake';
  }
  else {
    return 'Cake was evenly distributed!';
  }
}

console.log(distribution(cakeSlices));
