// commands/theme.js
import fs from 'fs';
import path from 'path';
import config from '../conf/conf.js';

const DATA_PATH = path.join(process.cwd(), 'data');
const THEME_FILE = path.join(DATA_PATH, 'menuTheme.json');

function ensureThemeFile() {
  if (!fs.existsSync(DATA_PATH)) fs.mkdirSync(DATA_PATH);
  if (!fs.existsSync(THEME_FILE)) {
    fs.writeFileSync(THEME_FILE, JSON.stringify({ theme: 'uchiha' }, null, 2));
  }
}
function getTheme() {
  ensureThemeFile();
  return JSON.parse(fs.readFileSync(THEME_FILE, 'utf8')).theme;
}
function setTheme(name) {
  ensureThemeFile();
  fs.writeFileSync(THEME_FILE, JSON.stringify({ theme: name }, null, 2));
}

const valid = [
  'uchiha',
  'akatsuki',
  'sharingan',
  'mangekyou',
  'list',
  'current',
];

export default {
  name: 'theme',
  description:
    'Altera o tema do menu: !theme <uchiha|akatsuki|sharingan|mangekyou|list|current>',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const arg = (args?.[0] || '').toLowerCase();

    if (!arg || !valid.includes(arg)) {
      return await sock.sendMessage(jid, {
        text: 'Uso: !theme <uchiha|akatsuki|sharingan|mangekyou|list|current>',
      });
    }

    if (arg === 'list') {
      return await sock.sendMessage(jid, {
        text: 'Temas disponíveis:\n• uchiha\n• akatsuki\n• sharingan\n• mangekyou\n\nUse: !theme <nome>',
      });
    }

    if (arg === 'current') {
      const cur = getTheme();
      return await sock.sendMessage(jid, { text: `Tema atual: ${cur}` });
    }

    // setar tema
    setTheme(arg);
    return await sock.sendMessage(jid, {
      text: `✅ Tema alterado para: ${arg}\nAbra o menu com !menu`,
    });
  },
};
