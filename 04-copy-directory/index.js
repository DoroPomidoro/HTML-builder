const fs = require('fs');
const path = require('path');
const currentFolder = path.join(__dirname, './files/');
const copyFolder = path.join(__dirname, './files-copy/');
fs.mkdir(copyFolder, { recursive: true }, error => {
  if (error) throw error;
  fs.readdir(copyFolder, { recursive: true }, (err, files) => {

    if (err) throw error;   
    files.forEach(file => {
      fs.unlink(path.join(copyFolder, file), err => {
        if(err) throw err;
      });
    });
  }),

  fs.readdir(currentFolder, { recursive: true }, (err, files) => { 
    if (err) throw error;
    files.forEach(file => {
      fs.mkdir(copyFolder, { recursive: true }, error => {
        if (error) throw error;
        fs.copyFile(path.join(currentFolder, file), path.join(copyFolder, file), err => {//копируем содержимое старой папки в новую
          if(err) throw err;
        });
      });
    });  
  });
});