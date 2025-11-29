// commands/slap.js
module.exports = {
  name: 'slap',
  description: 'Dá um tapa virtual',
  run: async ({ sock, msg, args }) => {
    const target = args[0] || 'alvo desconhecido';
    await sock.sendMessage(msg.key.remoteJid, {
      text: `👊 @${target}, você recebeu um tapa virtual do clã Uchiha!`,
    });
  },
};
