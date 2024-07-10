const readline = require("readline");

function promptUser(question, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Use the question parameter
  rl.question(question, (userInput) => {
    console.log(`You entered: ${userInput}`);
    rl.close();
    if (callback) callback(userInput);
  });
}

// Example usage
promptUser("Please enter the first number: ", (input) => {
  console.log(`The first number is ${input}`);
});
promptUser("Please enter your name: ", (name) => {
  console.log(`Hello, ${name}!`);
});
