/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, 
* we can use variables.  Variables
* are named identifiers that can point to values of a particular type, 
* like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so 
* because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name 
* (id or alias) 
* for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization 
* (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have 
* NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - 
//we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. let
let theName;
/*
follows all the rules of var besides hoisting(see hoisting)
must declare before use
*/

// 5. const
// const aName = hunter;

/*
must be assigned a value
cannot be reassigned
BUT const objects/arrays, the properties can change but cannot be reassigned

*/

// 6. hoisting
var x = 4;
    //any action
    //prints->y===undefined
var y = 6;
/*
-moving declarations to the top *exceptions apply
-let and const === not hoisted
-values not hoisted but declarations are

scope hoisting
   * global scope
    -any variable declared outside a function
    -can be accessed anywhere
  *  function scope
    -declared within a function
    -only accessed within that function
   * block scope
    -declared within a block
    -cannot be accessed from outside the block
    -var === not block scope
    -let && const === block scope
    
*/