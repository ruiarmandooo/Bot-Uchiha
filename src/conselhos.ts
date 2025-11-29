// commands/conselhos.js
const fetch = require('node-fetch');
module.exports = {
  name: 'conselhos',
  description: 'Envia conselho aleatório',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, {
        text: `💡 Conselho: ${data.slip.advice}`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Não consegui encontrar um conselho.',
      });
    }
  },
};
