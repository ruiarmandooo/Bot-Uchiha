// organize-final-uchiha.js

const fs = require('fs');
const path = require('path');

const commandsDir = './commands';
const organizedDir = './organizedCommands';
const fileExtensions = ['.js'];

function organizeFiles() {
  // Create organized directory
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir);
  }

  // Read commands directory
  fs.readdir(commandsDir, (err, files) => {
    if (err) throw err;

    const fileNames = new Set();
    const duplicates = new Set();

    files.forEach((file) => {
      const fileNameWithoutExt = path.parse(file).name;
      const fileExtension = path.extname(file);

      // Check for duplicates
      if (fileNames.has(fileNameWithoutExt)) {
        duplicates.add(fileNameWithoutExt);
      } else {
        fileNames.add(fileNameWithoutExt);
      }

      // Rename files without .js extension
      if (fileExtension === '') {
        const newFileName = `${fileNameWithoutExt}.js`;
        fs.renameSync(
          path.join(commandsDir, file),
          path.join(commandsDir, newFileName),
        );
      }
    });

    // Move non-duplicate files to organized directory
    files.forEach((file) => {
      const cleanName = path.parse(file).name;
      if (!duplicates.has(cleanName)) {
        fs.renameSync(
          path.join(commandsDir, file),
          path.join(organizedDir, file),
        );
      }
    });

    console.log('Files organized successfully!');
  });
}

organizeFiles();
