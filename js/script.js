// This declares the variable myVar
var myVar;
// This sets the value of the myVar variable to the number .7
myVar = 0.7;

// This declares the myName variable and sets it to the string value of Kurt
var myName = "Kurt";

// A double quoted string cannot contain double quotes within unless they are escaped using a \, same applies for single quoted strings
var mySentence = "What's up";
var thing = 'and he said "What\'s up" to me';

// Strings cannot break lines by default.
var myLongString = "This actually isn't too long.";

// Booleans are either true or false
var myBoolean = false;

var numA = 14;
var numB = 27;

// addition in js is done with the + symbol
var sumOfAandB = numA + numB;

// This reassigns the value of the numA variable to 32, this does not effect the line above but will effect the line below.
numA = 32;

// Subtraction is done with the -
var numAMinusNumB = numA - numB;

// multiplication is done through an *
var numC = 3 * 3;

// division is done with /
var numD = 4 / 2;

// Exponents are done with **
var myExponent = 2 ** 4;

// modulus is done with a % returning the remainder after division,       5 % 2 = 1
var myModulus = 5 % 2;

// This is concatenation, adding strings together spaces must be put in manually
var myFullName = myName + " " + "Petrek";

// This creates the me variable and assigns to be an object
var me = {
  // objects are made of named key value pairs
  name: "Kurt Petrek",
  age: 29,
  isAwesome: true,
  head: {
    eyes: 2,
    hairColor: "brown",
    brain: true
  }
};
// Properties on the me object would generally be accessed using dot notation
// me.name would return Kurt Petrek, me.head.eyes would return 2

console.log(me.age);

// This sets the age property on the me object to the value of 30
me.age = 30;

console.log(me.age);

// Arrays are key value pairs where the key is a number, arrays are created using [], each element within an array is separated by a ,
var myArr = [55, "Tiger", true, me];

//  Arrays in JavaScript start with a 0 index, to access elements within an array use [] with the index number, myArr[0] would be 55, myArr[1] would be Tiger
console.log(myArr[0]);

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday"];

// Objects can hold arrays as the value for Properties
// This adds a hobbies property to the me object and sets it to be an array
me.hobbies = ["Code", "Music", "Food", "Games"];

console.log(me.hobbies[0]);

var something;
// something is undefined the variable has been declared but a value has been set, that's okay
console.log(something);

var somethingElse;
// If js encounters a variable that does not exist it will throw an error and stop executing any further script by default
console.log(somethingElse);

// null is nothing
var nothing = null;

// This is a function declaration that create a function called sayHello
function sayHello() {
  console.log("Welcome to JavaScript City dude!");
}
// function declarations do not end in a ;

// This calls or invokes the sayHello function.
sayHello();

// This works because function declarations are hoisted to the top of the document when read by the browser
sayHelloTo("meeeee");

// variables created within a function are only available within the function, this is called function scope
function sayHelloTo(name) {
  var message = "Welcome to JavaScript City " + name + "!";
  console.log(message);
}

// sayHelloTo("Richard Simmons");
// sayHelloTo("Paul Newman");
// sayHelloTo(myFullName);
// sayHelloTo();

//This will throw an error, functions should be defined before they are called
// sumNums();

// This is a function expression that creates a function called sumNums
var sumNums = function(firstNum, secondNum) {
  var sum = firstNum + secondNum;
  // This will return the value of the sum variable to where the function is called, once a return statement is triggered no further code within the function is executed.
  return sum;
  console.log("This is never going to happen");
};

sumNums(2, 2);

// console.log( sumNums(2,2) );

var mySum = sumNums(923, 13454);
