// JS Conditionals

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
var age = Number(prompt("How old are you?...  please enter your age: "));

if (age < 0) {
  console.log("Sorry, your age is wrong! Age is never negative.");
} else if (age === 21) {
  console.log("happy 21st birthday!!");
} else if ((age % 2) !== 0) {
  console.log("your age is odd!");
} else if (age % Math.sqrt(age) === 0) {
  console.log("perfect square!");
} else {
  console.log("you are " + age + " years old!");
}