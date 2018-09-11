// 1. while, for, for-in loops
var number = 12;
while(number <12){
    console.log('less than 12');
}

for(var i = 0; i < 10; i++){
    console.log(i);
}

var object = {name:'hunter', age: 17, school: 'salmen'};

for(var hi in object){
    console.log(hi, object[hi]);
}
/*
while
    performs an action as long as the condition stays true
for
    performs an action a specified amount of times
for-in
    goes through an object
*/

// 2. loop counting up and down
for(i = 0; i < 10; i++){
    console.log(i);
}
for(var j = 10; j>0; j--){
    console.log(j);
}
// 3. loop over array forwards and back
var arr = [1,2,3,4,5,6,7,8,9,10];
for(i = 0; i<=arr.length; i++){
    console.log(arr[i]);
}
for(j = arr.length; j>0; j--){
    console.log(j);
}
// 4. loob over object
var obj = {name:'hunter', age: 17, school: 'salmen'};

for(var key in obj){
    console.log(key, obj[key]);
}
