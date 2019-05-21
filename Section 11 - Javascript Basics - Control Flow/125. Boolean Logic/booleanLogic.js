/* Boolean Logic
True, False, and Beyond */

/* Boolean Logic
- Everything starts with the idea that a statement is either True or False
- Then we can combine those initial statements to create more complex statements that also evaluate to True or False */

/* Comparison Operators
>
>=
<
<=
==
!=
===
!==
 */

// Equality Operators
// == vs. ===
var x = 99;
x == "99" // true
x === "99" // false

var y = null;
y == undefined // true
y === undefined // false

// "==" performs type coercion, while "===" does not

// A Few Interesting Cases
true == "1" // true
true == "12" // false
true == "2" // false
0 == false // true
null == undefined // true
NaN == NaN // false