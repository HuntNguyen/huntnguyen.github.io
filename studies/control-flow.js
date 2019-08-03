// 1. if
var num = 2;
if(num>0){
    console.log('greater than 0');
}
/*
performs an action if the statement is true
*/

// 2. else- if
var num2 = 50;
if(num2 < 20){
    console.log('less than 20');
}else if(num2 < 100){
    console.log('less than 100');
}else{
    console.log('no');
}
/*
performs an action if the if statement is false and this statement is true
*/

// 3. else
var name = 'hunter';
if(name === 'bob'){
    console.log('hi bob');
}else{
    console.log("you're not bob");
}
/*
performs an action if the two above statements are false
*/

// 4. switch
var subject = 'english';

switch(subject){
    case 'math':
        console.log('math homework due');
        break;
    case 'english':
        console.log('english homework due');
        break;
    case 'science':
        console.log('science homework due');
        break;
    case 'history':
        console.log('history homework due');
        break;
}
/*
performs different actions based on which condition is true
kind of like if,else-if,else 
*/