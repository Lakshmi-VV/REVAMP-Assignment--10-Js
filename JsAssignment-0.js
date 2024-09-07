// 1.Javascript
// high level language , interpreted , used for dynamic web pages.

// 2.Variables and Types:
var userAge = 21;
var userName = "Lechu";
console.log(userAge, userName);

// 3.Comments in JavaScript:
/*This is multi line comment.
The below function will perform a add, sub, mul and divison operations on the varibales*/

// 4.Operations:
var num1 = 10;
var num2 = 5;
console.log("Addition", num1 + num2);
console.log("Subtraction", num1 - num2);
console.log("Multiplication", num1 * num2);
console.log("Division", num1 / num2);

// 5.Data Types:
//string - sequence of characters enclosed by quotes
var name = "Lechu";
//number - numerical value
var num = 21;
//boolean - represents true or false
var boolean = true;
//array - holds a sequence of items,we can use any data type in one array
var fruits = ["apple", "orange", "pineapple"];

// 6.Functions in JavaScript:
function greetUser(name) {
  return console.log("Welcome,", name);
}
greetUser("Lechu");

// 7.if Else in JavaScript:
var temperature = 32;
if (temperature > 30) {
  console.log("It's hot");
} else {
  console.log("It's not hot");
}

// 8.FOR LOOP:
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// 9.Loose vs Strict Equality:
var a = 5;
var b = "5";
var c = 6;
var d = "6";
if (a === b) {
  console.log("true"); //Strict equality -check data type also
} else {
  console.log("false");
}
if (c == d) {
  console.log("True"); //Loose equality - checks value
}
