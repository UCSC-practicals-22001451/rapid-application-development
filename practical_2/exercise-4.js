const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a number: ", (input) => {
  const num = parseInt(input);
  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else {
    const isPrime = checkPrime(num);
    if (isPrime) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
  }
  rl.close();
});

function checkPrime(num) {
  if (num <= 1) return false;
  for (let i = 2, sqrtNum = Math.sqrt(num); i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
