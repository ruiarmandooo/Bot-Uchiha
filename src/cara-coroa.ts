// commands/cara-coroa.js
module.exports = {
  name: 'cara-coroa',
  description: 'Joga cara ou coroa com menção opcional',
  run: async ({ sock, msg, args }) => {
    const mention =
      msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    const result = Math.random() < 0.5 ? 'Cara 🟢' : 'Coroa 🔴';
    if (mention) {
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🪙 @${mention.split('@')[0]}, resultado do seu jogo: ${result}`,
        mentions: [mention],
      });
    } else {
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🪙 Resultado: ${result}`,
      });
    }
  },
};
