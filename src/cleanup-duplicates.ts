const fs = require('fs');
const path = require('path');

// Array of duplicate files to remove
const duplicates = [
  '8ball2.js',
  'abracar2.js',
  'avatar2.js',
  'cara-coroa2.js',
  'clima2.js',
  'covid19.js',
  'fact2.js',
  'piadas2.js',
  'truth2.js',
  'antiflood (1).js',
  'anticheat.js (2)',
  'welcome (1).js',
  'desafiar2.js',
  'link-gp2.js',
  'abracar-geral.js',
];

// Log file
const logFile = path.join(__dirname, 'cleanup-log.txt');

function log(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFile, `${timestamp} - ${message}\n`);
}

duplicates.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    log(`Removed duplicate file: ${file}`);
  } else {
    log(`File not found: ${file}`);
  }
});

log('Cleanup process completed.');
