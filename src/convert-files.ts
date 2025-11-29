const fs = require('fs');
const path = require('path');

const directoryPath = './'; // Specify the directory you want to process

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Uchiha Error: Unable to scan directory: ' + err);
    return;
  }

  files.forEach((file) => {
    if (path.extname(file) !== '.js') {
      const oldPath = path.join(directoryPath, file);
      const newPath = path.join(directoryPath, `${file}.js`);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(
            'Uchiha Error: Failed to rename file ' + file + ': ' + err,
          );
        } else {
          console.log('Uchiha Success: Renamed ' + oldPath + ' to ' + newPath);
        }
      });
    }
  });
});
