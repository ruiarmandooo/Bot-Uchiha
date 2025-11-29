const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
  name: 'download',
  execute: async (sock, msg, args) => {
    const url = args[0];
    if (!url)
      return sock.sendMessage(msg.key.remoteJid, {
        text: 'Use: !download <URL>',
      });

    try {
      const info = await ytdl.getInfo(url);
      const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
      const filePath = `/tmp/${title}.mp4`;

      const stream = ytdl(url, { quality: 'highest' });
      const writeStream = fs.createWriteStream(filePath);
      stream.pipe(writeStream);

      writeStream.on('finish', async () => {
        const data = fs.readFileSync(filePath);
        await sock.sendMessage(msg.key.remoteJid, { video: data });
        fs.unlinkSync(filePath);
      });
    } catch (e) {
      await sock.sendMessage(msg.key.remoteJid, {
        text: 'Erro ao baixar o vídeo.',
      });
    }
  },
};
