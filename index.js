'use strict';

const readline = require("readline");
const COLOURS = require('./constants').COLOURS;
const add1and1 = require('./src/add1and1');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = {
  0: {
    name: 'Quit',
    script: (rl) => {
      console.log(COLOURS.FgBlack, 'Goodbye!\n');
      rl.close();
    }
  },
  1: {
    name: 'Add 1 and 1',
    script: () => {
      const result = add1and1();
      console.log(COLOURS.FgGreen, `The result is ${result}\n`);
      displayConsoleMenu();
    }
  },
  2: {
    name: 'Add 2 and 2 (not implemented)',
  }
}

const displayConsoleMenu = () => {
  Object.keys(choices).forEach((index) => {
    console.log(COLOURS.FgBlack, `${index}: ${choices[index].name}`);
  });
  console.log(COLOURS.FgBlack, '\n');
  rl.question('What is your choice? ', (menuChoice) => {
    console.log('\n');
    if (!choices[menuChoice]) {
      console.warn(COLOURS.FgRed, `Choice ${menuChoice} is invalid.\nTo quit, enter 0.\n`);
      displayConsoleMenu();
      return;
    }

    if (!choices[menuChoice].script) {
      console.error(COLOURS.FgRed, `No script found for choice ${menuChoice}\n`);
      displayConsoleMenu();
      return;
    }
    choices[menuChoice].script(rl);
  });
}

displayConsoleMenu();