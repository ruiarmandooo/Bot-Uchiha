// commands/youTube.js
const ytdl = require('ytdl-core');
module.exports = {
  name: 'youTube',
  description: 'Envia vídeo do YouTube',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Preciso do link do vídeo… até o Sharingan reclamaria.',
      });
    const url = args[0];
    try {
      const info = await ytdl.getInfo(url);
      const format = ytdl.chooseFormat(info.formats, {
        quality: 'highestvideo',
      });
      await sock.sendMessage(msg.key.remoteJid, {
        video: { url: format.url },
        caption: `🎥 ${info.videoDetails.title}`,
      });
    } catch (e) {
      console.error(e);
      await sock.sendMessage(msg.key.remoteJid, {
        text: '💀 Não consegui baixar o vídeo… tente outro link.',
      });
    }
  },
};
