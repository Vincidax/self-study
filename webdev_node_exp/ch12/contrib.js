const contributionName = readline();
const upvotes = parseInt(readline());
const downvotes = parseInt(readline());
const correctionsOffered = parseInt(readline());
const correctionsMade = parseInt(readline());
const duration = parseInt(readline());

let a = 0,
  b = 0,
  c = 0;

// Check if upvotes are greater than downvotes
if (upvotes > downvotes) {
  a = 1;
}

// Check if all corrections are made and offered
if (
  correctionsMade > 0 &&
  correctionsOffered > 0 &&
  correctionsMade === correctionsOffered
) {
  b = 1;
}

// Check if duration is within the valid range
if (0 <= duration && duration <= 15) {
  c = 1;
}

const sum = a + b + c;

let result;

// Determine the contribution quality based on the sum
if (sum === 0 || sum === 1) {
  result = "Bad Contribution, Rejected!";
} else if (sum === 2) {
  result = "Good Contribution, Approved!";
} else if (sum === 3) {
  result = "Great Contribution, Approved!";
}

// Output the result
console.log(`${result}`);
