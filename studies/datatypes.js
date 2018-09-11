// 1. Number
var one = 1;
/*
simple data type
any number 
used for math

*/

// 2. String
var x = "stringX";
var a = "1";

/*
anything between quotes
even if a number is there, it's still called
a string
*/

// 3. Boolean
var c = false;
var d = true;
/*
something that returns a true or false value
uses comparison operators
    ===
    !=
    >
    <
    >=
    =<
has value === true;
    2
    -2
    "strings"
no value === false;
    0
    ""
    undefined
    null
    NaN
*/

//4. Array
var b = [1, "hunter", false];
/*
-complex datatype
-one variable that holds more variables 
-order specific - zero indexed(first value is zero, second value is one)
-uses []
-is an object
-different methods with arrays
    .length
    .pop
    .push
    .unshift
    etc
*/ 

// 5. object
var k = {name: "hunter", grade: "12"};
/*
-not an array (line 51)
-named container for holding things in a key:value pair
-key: value(separated by a colon)
-the name values are properties ex. name
-not order specific
-addressed by reference not by value
-everything not a simple datatype is an object
-different methods with objects
    objectName.method()
    ex. k.name();
    
*/

// 6. function 
function add(x,y){
    return x+y;
}
add(2,4); //function call

/*
code block to perform an action
function must be 'called' in order to perform
within the definition parathesis are parameters 
- within the function call parathesis are arguments
once a function is defined, use as needed
functions can be parameters-higher order functions
*/

// 7. undefined
undefined;
console.log(undefined); //prints => undefined
/*
simple value
has no value === undefined
var k; === undefined

*/

//8. null
null;
typeof null; // 'object'
/*
does not exist
but it is an object 
*/

// 9. NaN
NaN;
// isNan('hunter');  => 'true'
Number.isNaN('hunter'); //=> false
/*
Not A Number
compares unequal to anything even itself
    NaN === NaN => false
isNaN - returns true if value is currently NaN or it will be
Number.isNaN - returns true  only if value is currently NaN
*/

// 10. Infinity && -Infinity
Infinity;
-Infinity;
/*
represents positive and negative infinity, respectively
displayed when a number goes beyond (-)1.797693134862315 E+308
*/

// 11. difference primitive/simple && complex data types

/*
simple - can NOT be changed, not an object, no methods
    string
    number
    boolean
    undefined
    
complex - can be changed, is an object, has methods

*/

// 12. pass BY COPY && BY REFERENCE difference

/*
BY COPY
    makes a copy of the value then passes it on
    var a = 4;
    var b = a;
    both console.log() => prints 5
    a =2
    now
    console.log(a) => prints 2
    console.log(b) => prints 5
    b will always be a copy of the first a value; once you make a copy
    you can't change it
    
    
BY REFERENCE
   passes the orginal not a copy
    var a = {name:'hunter'};
    var b = a;
    both console.log() => prints {name:'hunter'}
    a.name = 'rob';
    now
    console.log(a) => prints {name:'rob'}
    console.log(b) => prints {name:'rob'}
    now b is just like a(the original)

*/

