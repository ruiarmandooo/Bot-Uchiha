const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const fs = require('fs');

module.exports = {
  name: 'autoStickerAdvanced',
  init() {
    this.maxVideoSeconds = 8;
  },

  async onMessage({ sock, msg }) {
    try {
      const jid = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];

      if (type === 'imageMessage') {
        const buffer = await sock.downloadMediaMessage(msg);
        const sticker = new Sticker(buffer, {
          pack: 'Uchiha',
          author: 'Uchiha Bot',
          type: StickerTypes.FULL,
        });
        const out = await sticker.toBuffer();
        await sock.sendMessage(jid, { sticker: out });
        await sock.sendMessage(jid, {
          text: `🗡️ Transformei sua imagem em sticker, ${msg.key.participant.split('@')[0]}.`,
        });
      }

      if (type === 'videoMessage') {
        const secs = msg.message.videoMessage.seconds || 0;
        if (secs > this.maxVideoSeconds) return;
        const buffer = await sock.downloadMediaMessage(msg);
        const sticker = new Sticker(buffer, {
          pack: 'Uchiha',
          author: 'Uchiha Bot',
          type: StickerTypes.FULL,
          animated: true,
        });
        const out = await sticker.toBuffer();
        await sock.sendMessage(jid, { sticker: out });
        await sock.sendMessage(jid, {
          text: `💀 Sua animação virou sticker, @${msg.key.participant.split('@')[0]}. Seja digno.`,
        });
      }
    } catch (e) {
      console.error('autoStickerAdvanced error', e);
    }
  },
};
