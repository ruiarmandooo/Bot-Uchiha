// commands/insultar.js
module.exports = {
  name: 'insultar',
  description: 'Insulta alguém com sarcasmo Uchiha',
  run: async ({ sock, msg, args }) => {
    const mention =
      msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
    if (!mention)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Mencione alguém para insultar, preguiçoso.',
      });
    const insults = [
      'Seu ninja sem talento… até o Shisui ficaria envergonhado.',
      'Sua inteligência é menor que a de um Genin iniciante.',
      'Até um clã rival se riria de você.',
    ];
    const insult = insults[Math.floor(Math.random() * insults.length)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `💀 @${mention.split('@')[0]}, ${insult}`,
      mentions: [mention],
    });
  },
};
