// commands/kick.js
module.exports = {
  name: 'kick',
  description: 'Expulsa usuário do grupo virtualmente',
  run: async ({ sock, msg, args }) => {
    const mention =
      msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Mencione alguém para expulsar.',
      });
    await sock.sendMessage(msg.key.remoteJid, {
      text: `👋 @${mention.split('@')[0]} foi expulso pelo clã Uchiha… virtualmente, claro.`,
      mentions: [mention],
    });
  },
};
