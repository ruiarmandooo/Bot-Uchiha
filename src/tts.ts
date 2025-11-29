// commands/tts.js
const ttsFeature = require('../features/ttsIntegration');
module.exports = {
  name: 'tts',
  description: 'Converte texto em áudio',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Preciso do texto para transformar em voz… até o Itachi ficaria desapontado.',
      });
    await ttsFeature.onMessage({ sock, msg, text: args.join(' ') });
  },
};
