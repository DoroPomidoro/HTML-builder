const fs = require('fs'); 
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const direction = path.join(__dirname, 'text.txt');

function createFile() {
  rl.on('SIGINT', () => {
    console.log('goodbye!');
    process.exit();
  });
  fs.open(direction, 'w', (err) => {
    if (err) throw err;
  });
}

function fileHandler() {  
  rl.question('Input something: \n', (inputedStr) => {
    if (inputedStr === 'exit') {
      console.log('Oh, no! You killed your terminal input');
      rl.close();
    } else {
      fs.appendFile(direction, inputedStr, (err) => {
        if(err) throw err;
        console.log(`You have added: ${inputedStr}`);
      });
      fileHandler();
    }
  });
}

createFile();
fileHandler();
