// JS Conditionals
// Conditionals Exercise Solution

/* Exercises
If age is negative
  print an error message

If age is 21
  print "happy 21st birthday!!"

If age is odd
  print "your age is odd!"

SUPER BONUS: if age is a perfect square,
  print "perfect square!"
   */

// Solutions
// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

// If age is negative
if (age < 0) {
  console.log("Come back once you're out of the womb");
}

// If age is 21  
if (age === 21) {
  console.log("Happy 21st Birthday!");
}

// If age is odd
// (not evenly divisible by two)
if (age % 2 !== 0) {
  console.log("Your age is odd!");
}

// If age is a perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}