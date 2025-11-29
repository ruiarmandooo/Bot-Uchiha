// commands/info-bot.js
module.exports = {
  name: 'info-bot',
  description: 'Exibe informações do bot',
  run: async ({ sock, msg }) => {
    const text = `🌀 Uchiha Bot Mortal\nVersão: 1.0.0\nCriador: Rúben Silver\nStatus: 🔥 Ativo e letal\nUse com sabedoria ou sofrerá consequências.`;
    await sock.sendMessage(msg.key.remoteJid, { text });
  },
};
