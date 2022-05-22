const fs = require('fs'); 
const path = require('path');
const direction = path.join(__dirname, './secret-folder/');

fs.readdir(direction, (err, files) => {
  if(err) throw err;

  for (let file of files) {
    let filePath = `${direction}${file}`;
    
    fs.stat(filePath, (errStat, status) => {
      if(errStat) throw errStat;
      
      if(status.isFile()){
        let ext = path.extname(file);
        let extName = ext.split('.');
        let kbSize = status.size / 1000;
        let fileData = `${file.split('.')[0]} - ${extName[1]} - ${kbSize}kb`;
        console.log(fileData);
      }
    });
  }
});
