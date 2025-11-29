// antiHeavyImage.js
// Remove imagens maiores que threshold (evita upload/lag)

module.exports = {
  name: 'antiHeavyImage',
  init() {
    this.maxBytes = 5 * 1024 * 1024; // 5 MB
  },

  async onMessage({ sock, msg }) {
    try {
      const jid = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];
      if (type !== 'imageMessage') return;

      const len =
        msg.message.imageMessage.fileLength ||
        msg.message.imageMessage.byteLength ||
        0;
      if (len > this.maxBytes) {
        const sender = msg.key.participant || jid;
        await sock.sendMessage(jid, {
          text: `⚠️ Imagem muito grande detectada. Limite ${Math.round(this.maxBytes / 1024 / 1024)}MB.`,
          mentions: [sender],
        });
        try {
          await sock.sendMessage(jid, { delete: msg.key });
        } catch (e) {
          /*ignore*/
        }
      }
    } catch (e) {
      console.error('antiHeavyImage error', e);
    }
  },
};
