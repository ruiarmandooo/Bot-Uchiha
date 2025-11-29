// commands/ping.js
module.exports = {
  name: 'ping',
  description: 'Verifica se o bot está online',
  run: async ({ sock, msg }) => {
    await sock.sendMessage(msg.key.remoteJid, {
      text: '🏹 Ping recebido. O Sharingan do bot está ativo.',
    });
  },
};
