// commands/random.js
module.exports = {
  name: 'random',
  description: 'Gera número aleatório de 1 a 100',
  run: async ({ sock, msg }) => {
    const num = Math.floor(Math.random() * 100) + 1;
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🎲 Número aleatório: ${num}`,
    });
  },
};
