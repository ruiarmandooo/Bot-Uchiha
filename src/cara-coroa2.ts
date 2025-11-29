// commands/cara-coroa2.js
module.exports = {
  name: 'cara-coroa2',
  description: 'Joga cara ou coroa',
  run: async ({ sock, msg }) => {
    const result = Math.random() < 0.5 ? 'Cara 🟢' : 'Coroa 🔴';
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🪙 Resultado: ${result}`,
    });
  },
};
