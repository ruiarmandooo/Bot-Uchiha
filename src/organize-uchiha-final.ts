const fs = require('fs');
const path = require('path');

// Function to remove duplicates
function removeDuplicates(array) {
  return [...new Set(array)];
}

// Function to convert files to .js
function convertToJS(directory) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    if (file.endsWith('.txt')) {
      const oldPath = path.join(directory, file);
      const newPath = path.join(directory, file.replace('.txt', '.js'));
      fs.renameSync(oldPath, newPath);
    }
  });
}

// Function to move commands to categories
function categorizeCommands(sourceDir, targetDir) {
  const commands = fs.readdirSync(sourceDir);
  commands.forEach((command) => {
    const category = command.split('-')[0];
    const categoryDir = path.join(targetDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir);
    }
    fs.renameSync(
      path.join(sourceDir, command),
      path.join(categoryDir, command),
    );
  });
}

// Function to create a dynamic loading system
function loadCommands(directory) {
  const commandFiles = fs.readdirSync(directory);
  commandFiles.forEach((file) => {
    const command = require(path.join(directory, file));
    // Dynamic loading logic here
    console.log(`Loaded command: ${file}`);
  });
}

// Main function to execute reorganization
function reorganize(directory) {
  const categoriesDir = path.join(directory, 'categories');
  if (!fs.existsSync(categoriesDir)) {
    fs.mkdirSync(categoriesDir);
  }

  const files = fs.readdirSync(directory);
  const commandFiles = removeDuplicates(files);

  commandFiles.forEach((file) => {
    fs.writeFileSync(path.join(directory, file), ''); // Clear content for example
  });

  convertToJS(directory);
  categorizeCommands(directory, categoriesDir);
  loadCommands(categoriesDir);
}

reorganize('./commands'); // Adjust path as necessary
