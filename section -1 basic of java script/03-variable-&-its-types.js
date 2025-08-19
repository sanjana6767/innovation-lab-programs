/** 
 * feature              |  var       | let     | const
 * scope                |  function  | block   | block
 * reassignable         |  yes       | yes     | no
 * redeclaration        |  yes       | no      | no
 * hoisting             |  yes       |yes(NI)  | yes(NI)
 *       
 * NI-->not initialized
 * 
 * for let and const-->Hoisting is allowed but
 * uninitialised means it lead to temporal dead zone.
 * 
 */
 
//automatically
a = 10;
b =20;
console.log(a);
console.log(b);

//var
var a1 =35;
var a2 =45;
console.log(a1);
console.log(a2);

//let--->used from version ES-6
let name1="max";
let age=22
console.log(name1);
console.log(age);

//const--->used from version ES-6
const PI =3.14;
const API_KEY = "jggs1hkjgd@152433$"
console.log(PI);
console.log(API_KEY);

/**
 * most frequently used variable in java script is const 
 */MessagePort toString
