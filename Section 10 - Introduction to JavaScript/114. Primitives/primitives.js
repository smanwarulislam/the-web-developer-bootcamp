// JavaScript Basics
// Primitives

/* Objectives
Introduce the 5 primitive data types
Work with numbers and numeric operators
Work with strings and common string methods */

// 5 Primitive Data types

// Numbers
4
9.3
-10

// Strings
"Hello World"
"43"

// Booleans
true
false

// null and undefined
null
undefined

// Numbers
4
9.3
-10

// We can do some math
// Addition
4 + 100 // 104
3+7 // 10
5 + 4 + 3 // 12

// Subtraction
1 - 54  // -53

// Multiplication
2 * 5 // 10

// Division
6 / 2 // 3
1 / 3 // 0.3333333333333333

// The order of operations
(3 - 8) * 24  // -120

// Modulo - remainder operator
10 % 3  // 1
20 % 5  // 0

// Division is a slash. Multiplication is the star asterisk. Modulo is a percentage sign.

// Strings
// Single or Double quotes OK
"hello world"
'hello world'

"hello class!"  // "hello class!"
'dogs are awesome'  // "dogs are awesome"

"hello' // Uncaught SyntaxError: Invalid or unexpected token

"I can't stop eating candy" // "I can't stop eating candy"

'I can't stop'  // Uncaught SyntaxError: Unexpected identifier

// Concatenation
"hi" + "goodbye"  // "higoodbye"
"hi " + "goodbye" // "hi goodbye"

// Escape Characters start with "\"
"she said \"goodbye!\"" // "she said "goodbye!""
"she said "goodbye!"" // Uncaught SyntaxError: Unexpected identifier
"To see a backslash: \\"  // "To see a backslash: \"

// Strings have a length property
"HELLO".length  // 5
"my favorite number is: 1234".length  // 27
"The Beatles".length  // 11

// Access individual characters using [] and an index
"The Beatles"[0]  // "T"
"The Beatles"[4]  // "B"
"The Beatles"[10] // "s"