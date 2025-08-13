"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNumbers(a, b) {
    return a + b;
}
const substractTwoNumbers = (a, b) => {
    return a - b;
};
console.log(addTwoNumbers(3, 9));
console.log(substractTwoNumbers(10, 7));
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting} ${name}!`;
}
console.log(formatGreeting('mario', 'hello'));
//# sourceMappingURL=index.js.map