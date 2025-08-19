/**
 * why use or avoid var?
 * var is considered less safe than let or const due
 * to its function scope and re-declaration ability.
 *
 */
 
//Redeclaration ang re-assigning
var data; //declaration 
data ="info1"; //assigning 
var data; //redeclaration
data ="info2"; //reassigning
console.log(data);

let a;//declaration  
// let a;
a=12; //assigning
a=98; //reassigning
console.log(a);

const PI =3.14;
// const PI =3.14;


// Hoisting
console.log(name1);//undefined
var name1="srividhya";
console.log(name1);


console.log(name2);
let name2 = "vidhya";

const PI1 =3.14;


//function and block scope
/**
 * function scope:
 * syntax:
 * function function_name() {
 * statement;
 * }
 * function name();--> function call
 * 
 * block scope:
 * syntax:
 * function function_name() {
 *        if(condition){
 *             statement:          
 * }
 * }
 */

//hosting with function 
greet();
function greet(){
    console.log("Hello");
}

//hosting with function expressions
var sayHello=function(){
      console.log("Function Expressions");

}
sayHello();

//Real-time example 
function processData(){
     if(true){
        console.log(data);
        var data="Data Loaded";
        console.log(data);
     }
}
processData();

//Re-Declartion with function scope
function test(){
    var datal=25;
    var data2=35;
    console.log(data1);
}
test();

//Re-declaration in different scope
let num1=10;
{
    let num1=20;
    console.log(num1);
}
console.log(num1);//10

//Reassinging in array using const
const arr=[1,2,3];
arr[0]=10;
console.log(arr);//[10,2,4]

//Reassigning properties in const objects
const obj = {name:"kanika",age:23};
obj.age=30;
console.log(obj);

//Reassigning in loops
let sum =0;
for(i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);//15