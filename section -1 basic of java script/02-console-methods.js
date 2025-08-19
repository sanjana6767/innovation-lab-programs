












console.group("group logs")
console.log("message-1")
console.log("message-2")
console.groupEnd();

console.groupCollapsed("collapsedgroup");
console.log("message inside collapsed group");
console.groupEnd();

let inadult=false;
console.assert(inadult,"this person is not an adult!.....")