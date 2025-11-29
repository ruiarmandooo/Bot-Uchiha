// commands/meme.js
const fetch = require('node-fetch');
module.exports = {
  name: 'meme',
  description: 'Envia um meme aleatório',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch('https://meme-api.com/gimme');
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, {
        image: { url: data.url },
        caption: `😂 Meme para você, @${msg.key.participant.split('@')[0]}. Ria ou chore, seu ninja.`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Meme não encontrado… até o Madara ficaria irritado.',
      });
    }
  },
};
