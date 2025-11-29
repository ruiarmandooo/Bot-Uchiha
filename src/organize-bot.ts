const fs = require('fs');
const path = require('path');

const commandFolders = {
  fun: 'commands/fun',
  games: 'commands/games',
  utility: 'commands/utility',
  moderation: 'commands/moderation',
  economy: 'commands/economy',
  information: 'commands/information',
  media: 'commands/media',
  admin: 'commands/admin',
  anti: 'commands/anti',
};

const commandPatterns = {
  fun: /fun/i,
  games: /game/i,
  utility: /utility/i,
  moderation: /mod/i,
  economy: /economy/i,
  information: /info/i,
  media: /media/i,
  admin: /admin/i,
  anti: /anti/i,
};

const report = {
  moved: [],
  deleted: [],
};

// Function to organize commands
function organizeCommands() {
  const rootDir = '.';
  const files = fs.readdirSync(rootDir);

  const commands = files.filter((file) => file.endsWith('.js'));
  const commandSet = new Set(); // to track unique commands

  commands.forEach((file) => {
    const commandName = path.basename(file, '.js');
    let moved = false;

    for (const [category, pattern] of Object.entries(commandPatterns)) {
      if (pattern.test(commandName)) {
        const destPath = path.join(__dirname, commandFolders[category], file);
        if (!commandSet.has(commandName)) {
          fs.renameSync(file, destPath);
          report.moved.push(commandName);
          commandSet.add(commandName);
          moved = true;
          break;
        }
      }
    }

    if (!moved) {
      report.deleted.push(commandName);
      fs.unlinkSync(file); // delete duplicate
    }
  });

  generateReport();
}

// Function to generate a report
function generateReport() {
  console.log('Movement Report:', report);
  fs.writeFileSync('movement_report.json', JSON.stringify(report, null, 2));
}

organizeCommands();
