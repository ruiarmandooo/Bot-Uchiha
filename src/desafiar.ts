// commands/desafiar.js
const dares = [
  '🔥 Envie uma selfie usando Sharingan virtual!',
  '☠️ Mande uma mensagem misteriosa para alguém do grupo.',
  '🕵️‍♂️ Faça algo que nunca fez antes… virtualmente.',
  '👁️ Revele um segredo sem medo.',
];
module.exports = {
  name: 'desafiar',
  description: 'Envia desafio aleatório',
  run: async ({ sock, msg }) => {
    const text = dares[Math.floor(Math.random() * dares.length)];
    await sock.sendMessage(msg.key.remoteJid, { text });
  },
};
