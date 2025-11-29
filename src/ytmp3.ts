const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = {
  name: 'ytmp3',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const url = args[0];
    if (!url) return sock.sendMessage(jid, { text: 'Use: !ytmp3 <URL>' });

    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    const filePath = `/tmp/${title}.mp3`;

    const stream = ytdl(url, { filter: 'audioonly' });
    const writeStream = fs.createWriteStream(filePath);
    stream.pipe(writeStream);

    writeStream.on('finish', async () => {
      const data = fs.readFileSync(filePath);
      await sock.sendMessage(jid, {
        audio: data,
        mimetype: 'audio/mpeg',
        ptt: false,
      });
      fs.unlinkSync(filePath);
    });
  },
};
