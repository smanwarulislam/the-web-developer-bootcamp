/* JS Conditionals
Making decisions with code */

/* Three JavaScript conditional keywords
If
Else If
Else */

/* Examples
If you are younger than 18
  you cannot enter the venue

If you are between 18 and 21
  you can enter but cannot drink

Otherwise
  you can enter and drink
 */

// Boolean Logic Review
1 < 2
2 > 1
1 <= 10
10 >= 1
1 === 1 //  while triple equals as strict equals -> It does care about type and value together
1 == "1" // double equals performs type coercion -> JavaScript does not care about type
2 < 3 && 5 > 1 // && (AND) is only true if both sides are true
1 > 3 || 9 > 8 // || (OR) is true if one of the sides to true

// logic
// we're going to have an age variable

if (age < 18) {
  console.log("Sorry, you are not old enough to enter the venue");
} else if (age < 21) {
  console.log("You can enter, but cannot drink");
} else {
  console.log("Come on in. You can drink.");
}