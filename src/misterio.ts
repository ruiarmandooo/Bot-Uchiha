// commands/misterio.js
const messages = [
  '👁️ O Sharingan observa…',
  '☠️ Algo sombrio se aproxima…',
  '🔥 Um poder ancestral desperta…',
  '🕵️ Segredos do clã Uchiha revelados.',
];
module.exports = {
  name: 'misterio',
  description: 'Mensagem misteriosa aleatória',
  run: async ({ sock, msg }) => {
    const text = messages[Math.floor(Math.random() * messages.length)];
    await sock.sendMessage(msg.key.remoteJid, { text });
  },
};
