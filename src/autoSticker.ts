const WSF = require('wa-sticker-formatter');

module.exports = {
  name: 'autoSticker',

  async onMessage({ sock, msg }) {
    const jid = msg.key.remoteJid;

    const type = Object.keys(msg.message)[0];

    // Auto-sticker de imagens
    if (type === 'imageMessage') {
      const buffer = await sock.downloadMediaMessage(msg);
      const sticker = new WSF.Sticker(buffer, {
        pack: 'Uchiha Bot',
        author: 'UCHIHA',
        type: WSF.StickerTypes.FULL,
      });

      await sock.sendMessage(jid, await sticker.toMessage());
    }

    // Auto-sticker de vídeos curtos
    if (type === 'videoMessage' && msg.message.videoMessage.seconds <= 8) {
      const buffer = await sock.downloadMediaMessage(msg);
      const sticker = new WSF.Sticker(buffer, {
        pack: 'Uchiha Bot',
        author: 'UCHIHA',
        type: WSF.StickerTypes.FULL,
      });

      await sock.sendMessage(jid, await sticker.toMessage());
    }
  },
};
