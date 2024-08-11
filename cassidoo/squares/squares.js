function squares(intNum) {
  let sum = 0;

  // Iterate and compute sum of squares directly
  for (let i = 1; i <= intNum; i++) {
    sum += i ** 2;
  }

  // Output the sum
  console.log(sum);
}
