// commands/fact.js
const fetch = require('node-fetch');
module.exports = {
  name: 'fact',
  description: 'Envia um fato curioso aleatório',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch(
        'https://uselessfacts.jsph.pl/random.json?language=pt',
      );
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, {
        text: `💡 Fato curioso: ${data.text}`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Não consegui buscar um fato… tente novamente.',
      });
    }
  },
};
