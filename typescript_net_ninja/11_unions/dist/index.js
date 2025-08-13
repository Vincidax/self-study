"use strict";
// union types
Object.defineProperty(exports, "__esModule", { value: true });
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'mario@netninja.dev';
email = null;
let anotherId;
anotherId = 'dandkafasdf';
anotherId = 5;
// type guard 
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
logDetails({ type: 'person',
    firstname: 'kigali',
    age: 23,
    id: 3 });
//# sourceMappingURL=index.js.map