const fs = require('fs'); 
const path = require('path');

let directory = path.join(__dirname, 'text.txt');
let stream = new fs.ReadStream(directory, {encoding: 'utf-8'});

stream.on('readable', () => {
  let data = stream.read(); 
  if (data != null) console.log(data);
});

// const fs = require('fs'); 
// const path = require('path');

// let directory = path.join(__dirname, 'text.txt');

// let stream = fs.ReadStream(directory, {encoding: 'utf-8'});

// stream.on('data', (data) => {
//   console.log(data);
// });