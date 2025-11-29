// antiAudioShort.js
// Remove/avisar se o áudio tem < X segundos (evita "pings" e ruído)

module.exports = {
  name: 'antiAudioShort',
  init() {
    this.minSeconds = 1; // segundos mínimos aceitáveis
  },

  async onMessage({ sock, msg }) {
    try {
      const jid = msg.key.remoteJid;
      const type = Object.keys(msg.message)[0];
      if (type !== 'audioMessage' && type !== 'videoMessage') return;

      const seconds = msg.message[type].seconds || 0;
      if (seconds > 0 && seconds < this.minSeconds) {
        const sender = msg.key.participant || jid;
        await sock.sendMessage(jid, {
          text: `⚠️ Áudio muito curto detectado de @${sender.split('@')[0]}. Envie áudios maiores que ${this.minSeconds}s.`,
          mentions: [sender],
        });
        try {
          await sock.sendMessage(jid, { delete: msg.key });
        } catch (e) {
          /*ignore*/
        }
      }
    } catch (e) {
      console.error('antiAudioShort error', e);
    }
  },
};
