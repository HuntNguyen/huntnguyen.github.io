// 1. assignment operators
var myName = 'hunter';
var truthy = true;
var assignment = 2;
assignment += 2; // console.log(assignment); prints => 4
assignment -= 2; // console.log(assignment); prints => 0
assignment *= 2; // console.log(assignment); prints => 4
assignment /= 2; // console.log(assignment); prints => 1
assignment %= 2; // console.log(assignment); prints => 0


/*
= assigns values to varibles 
+= adds values to varibles  
-= subtracts values to varibles 
*= multiples values to varibles 
/= divides values to varibles 
%= assigns remainder to varibles 

used to assign values to varibles
doesnt have to assign numbers, can be strings, booleans, arrays, objects, etc
*/

// 2. arithmetic operators
var math = 2+4; // console.log(math); prints => 6
math = 2-4; // console.log(math); prints => -2
math = 2*4; // console.log(math); prints => 8
math = 2/4; // console.log(math); prints => 0.5
math = 2%4; // console.log(math); prints => 2
math++;
var number = math;// console.log(number); prints => 7
math--;
var pemdas = math; // console.log(pemdas); prints =>
/*

+ adds
- subtracts
* multiplies
/ divides
% remainder
++ increment/increase
-- decrement/decrease

still follows PEMDAS
*/

// 3. comparasion operators
var compare = 46;
var two = 2;

compare == two; //console.log(compare == two); // prints => false
compare === two; //console.log(compare === two); // prints => false
compare != two; //console.log(compare != two); // prints => true
compare !== two; //console.log(compare !== two); // prints => true
compare < two; //console.log(compare < two); // prints => false
compare > two; //console.log(compare > two); // prints => true
compare <= two; //console.log(compare <= two); // prints => false
compare >= two; //console.log(compare >= two); // prints => true

/*

== equal - even if the value is in a string, it's still equal
    compare = '2' compare == two   prints => true
=== hard equal - if the value is in a string, then it's NOT equal
!= not equal
!== hard not equal - same as hard equal
    compare = '2' compare !== two   prints => true
< less than 
> greater than
<= less than or equal to
>= greater than or equal to

used to test for true or false
*/

// 4. logical operators
var big = 10;
var small = 5;

(big<100 && small > 0); //  console.log((big<100 && small > 0)); prints => true
(big < 100 || small > 50); // console.log((big < 100 || small > 50)); prints => true 
!(small === big); // console.log(!(small === big)) prints => true

/*

%% and
|| or
! not

still testing for true and false but not comparatively, logically
*/

// 5. unary operators
!false; // true
-3;     // -3
typeof 4; //"number"
/*
!        not
typeof - returns the type of datatype in a string
-        negates whatever value is behind it
*/

//6. ternary operators
var password = "where's the lamb sauce";
var access = (password === "where's the lamb sauce") ? 'enter' : 'go away';
//console.log(access); prints => 'enter';
/*
works as conditional statements 
a-condition
b-return value if true
c-return value otherwise
a ? b : c       
*/