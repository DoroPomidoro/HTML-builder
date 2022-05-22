const fs = require('fs');
const path = require('path');
const currentFolder = path.join(__dirname, './files/');
const copyFolder = path.join(__dirname, './files-copy/');
fs.mkdir(copyFolder, { recursive: true }, error => {
  if (error) {
    throw error;
  } else {
    fs.readdir(currentFolder, (err, files) => {
      if (err)
        console.log(err);
      else {
        fs.rmdir(copyFolder, () => {// удаляем содержимое новой созданной папки
          console.log('Folder Deleted!');
        });
        files.forEach(file => {
          fs.mkdir(copyFolder, { recursive: true }, error => {
            if (error) throw error;
            fs.copyFile(path.join(currentFolder, file), path.join(copyFolder, file), err => {//копируем содержимое старой папки в новую
              if(err) throw err;
            });
          });
        });
      }
    });
  }
});