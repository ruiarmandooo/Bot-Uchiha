// commands/piadas.js
const fetch = require('node-fetch');
module.exports = {
  name: 'piadas',
  description: 'Envia uma piada aleatória',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch('https://v2.jokeapi.dev/joke/Any?lang=pt');
      const data = await res.json();
      let text =
        data.type === 'single'
          ? data.joke
          : `${data.setup}\n\n${data.delivery}`;
      await sock.sendMessage(msg.key.remoteJid, { text: `😂 ${text}` });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Piada não encontrada… até o Madara ficaria desapontado.',
      });
    }
  },
};
