// write a program to swap between two numbers

var num1 = 10;
var num2 = 20;

// var num3 = num1;
// num1 = num2;
// num2 = num3;

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log(num1);
console.log(num2);