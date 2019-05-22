/* Logical Operators
AND, OR, and NOT */
&&
||
!

// Example
// Assuming x = 5 and y = 9
x < 10 && x !== 5 // false
y > 9 || x === 5 // true
  !(x === y) // true

// Exercise 1
var x = 10;
var y = "a";

y === "b" || x >= 10; // true

// Exercise 2
var x = 3;
var y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y);

!(x == "3" || x === y); // false
!(y != 8 && x <= y); // true

!(x == "3" || x === y) && !(y != 8 && x <= y); // false

// Truthy and Falsy Values
/* Values that aren't actually true or false, are still inherently "truthy" or "falsy" when evaluated in a boolean context */

// Examples:
"hello" // "hello"
!"hello" // false
!!"hello" // true

!"" // true
!!"" // false

!null // true
  !!null // false

  !0 // true
  !!0 // false

  !NaN // true
  !!NaN // false

  !-1 // false
  !!-1 // true

// Truthy and Falsy Values
/* Falsy Values:
false
0
""
null
undefined
NaN

Everything Else Is Truthy */

// Exercise 3
var str = "";
var msg = "haha!";
var isFunny = "false";

!((str || msg) && isFunny);

"" // false
"haha!" // true

false || true // true -> str || msg

  !!"false" // true

true && true // true -> (str || msg) && isFunny

  !true // false

  !((str || msg) && isFunny); // false