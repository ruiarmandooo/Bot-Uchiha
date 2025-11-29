// commands/truth.js
const truths = [
  '🕵️‍♂️ Nem tudo é o que parece…',
  '☠️ Um segredo sombrio permanece oculto.',
  '🔥 O poder nem sempre é visível.',
  '👁️ Cuidado com quem você confia.',
];
module.exports = {
  name: 'truth',
  description: 'Envia uma verdade aleatória',
  run: async ({ sock, msg }) => {
    const text = truths[Math.floor(Math.random() * truths.length)];
    await sock.sendMessage(msg.key.remoteJid, { text });
  },
};
