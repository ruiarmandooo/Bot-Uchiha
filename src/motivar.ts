const fetch = require('node-fetch');

module.exports = {
  name: 'motivar',
  description: 'Envia mensagem motivacional',
  run: async ({ sock, msg }) => {
    try {
      const res = await fetch('type.fit');
      const data = await res.json();
      const quote = data[Math.floor(Math.random() * data.length)];
      await sock.sendMessage(msg.key.remoteJid, { text: `"${quote.text}"` });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: 'Não consegui buscar a mensagem motivacional.',
      });
    }
  },
};
