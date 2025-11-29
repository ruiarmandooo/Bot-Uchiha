const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'logs',

  init({ DATA_DIR }) {
    this.logPath = path.join(DATA_DIR, 'logs.txt');
  },

  async onMessage({ msg, text }) {
    const sender = msg.key.participant || msg.key.remoteJid;
    const jid = msg.key.remoteJid;

    const line = `[${new Date().toISOString()}] ${sender} -> ${jid}: ${text}\n`;
    fs.appendFileSync(this.logPath, line);
  },
};
