// commands/citacao.js
const fetch = require('node-fetch');
module.exports = {
  name: 'citacao',
  description: 'Envia uma citação aleatória',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch('https://api.quotable.io/random?tags=wisdom');
      const data = await res.json();
      await sock.sendMessage(msg.key.remoteJid, {
        text: `📝 "${data.content}" — ${data.author}`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Não consegui encontrar uma citação… tente novamente.',
      });
    }
  },
};
