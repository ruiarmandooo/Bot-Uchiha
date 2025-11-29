const { Sticker, StickerTypes } = require('wa-sticker-formatter');

module.exports = {
  name: 'sticker-animado',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;
    if (!msg.message.videoMessage)
      return sock.sendMessage(jid, {
        text: 'Envie um vídeo curto para criar sticker animado!',
      });

    const buffer = await sock.downloadMediaMessage(msg);
    const sticker = new Sticker(buffer, {
      pack: 'Uchiha Bot',
      author: 'ChatGPT',
      type: StickerTypes.FULL,
      animated: true,
    });

    const stickerBuffer = await sticker.toBuffer();
    await sock.sendMessage(jid, { sticker: stickerBuffer });
  },
};
