// antiPorn.js
module.exports = {
  name: 'antiPorn',
  init() {},
  async onMessage({ sock, msg }) {
    try {
      const jid = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];
      if (!jid.endsWith('@g.us')) return;

      if (type === 'imageMessage') {
        const caption = msg.message.imageMessage.caption || '';
        const suspiciousWords = ['porn', 'xxx', 'sexo', 'nude'];
        const lower = caption.toLowerCase();

        const suspect = suspiciousWords.some((w) => lower.includes(w));
        if (suspect) {
          const sender = msg.key.participant || jid;
          await sock.sendMessage(jid, {
            text: `⚠️ @${sender.split('@')[0]}, conteúdo proibido detectado. Até o Sharingan não consegue ignorar isso.`,
            mentions: [sender],
          });
        }
      }
    } catch (e) {
      console.error('antiPorn error', e);
    }
  },
};
