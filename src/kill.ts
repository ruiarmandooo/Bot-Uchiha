// commands/kill.js
module.exports = {
  name: 'kill',
  description: 'Mata virtualmente um usuário',
  run: async ({ sock, msg, args }) => {
    const target = args[0] || 'alvo desconhecido';
    await sock.sendMessage(msg.key.remoteJid, {
      text: `☠️ @${target}, você foi eliminado pelo Sharingan do bot. Respire fundo… se puder.`,
    });
  },
};
