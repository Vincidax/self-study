# countPerfectlyRoundCookies

## Description
The `countPerfectlyRoundCookies` function calculates the number of trailing zeros in the factorial of a given number. Trailing zeros are produced by factors of 10, which result from multiplying pairs of 5 and 2. Since 5s are less frequent than 2s in factorials, the number of trailing zeros is determined by how many times the number can be divided by 5.

## Function Signature
```javascript
function countPerfectlyRoundCookies(j) {
    let count = 0;
    while (j >= 5) {
        j = Math.floor(j / 5);
        count += j;
    }
    console.log(`${count}`);
}
```

### How to Use
1. Copy the function into a JavaScript file.
2. Import and call it with a number to calculate trailing zeros:
   ```javascript
   const countPerfectlyRoundCookies = require('./path/to/your/function.js');
   
   countPerfectlyRoundCookies(100); // Example usage
```