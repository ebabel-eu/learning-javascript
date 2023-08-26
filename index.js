'use strict';

const readline = require("readline");
const add1and1 = require('./src/add1and1');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const displayConsoleMenu = () => {
  console.log('1. Add 1 and 1');
  console.log('2. Quit');

  rl.question('Select an option: ', (menuChoice) => {
    if (menuChoice === '1') {
      console.log(add1and1());
      displayConsoleMenu();
    }
  
    if (menuChoice === '2') {
      console.log('Goodbye!');
      rl.close();
      return;
    }
  });
}

displayConsoleMenu();