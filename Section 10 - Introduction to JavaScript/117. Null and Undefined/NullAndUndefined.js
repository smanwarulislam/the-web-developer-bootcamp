// Null and Undefined

// The two other primitives are null and undefined

// Variables that are declared but not initialized are undefined
// The following variables are undefined:
var name;
var age;

var age; // undefined
age // undefined

color // Uncaught ReferenceError: color is not defined at <anonymous>:1:1

// null is "explicitly nothing"
var currentPlayer = "charlie";
currentPlayer = null; // game over