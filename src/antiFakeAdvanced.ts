// antiFakeAdvanced.js
const config = require('../config');

module.exports = {
  name: 'antiFakeAdvanced',
  init(ctx) {
    this.config = config.antiFakeAdvanced || {};
    this.autoBan = !!this.config.autoBan;
    this.whitelist = this.config.whitelist || [];
    this.minLength = this.config.minLength || 8;
  },

  async onMessage({ sock, msg }) {
    try {
      const jid = msg.key.remoteJid;
      if (!jid || !jid.endsWith('@g.us')) return;

      const sender = msg.key.participant || msg.key.remoteJid;
      const phone = sender.split('@')[0];
      const onlyDigits = phone.replace(/\D/g, '');

      if (this.whitelist.some((w) => onlyDigits.startsWith(w))) return;

      if (onlyDigits.length < this.minLength || /[^0-9]/.test(phone)) {
        const meta = await sock.groupMetadata(jid).catch(() => null);
        const adminIds =
          meta?.participants?.filter((p) => p.admin).map((p) => p.id) || [];

        await sock.sendMessage(jid, {
          text: `⚠️ Hmm… @${phone} entrou no grupo. Seu número parece falso. Não tente enganar os olhos do clã.`,
          mentions: [sender, ...adminIds],
        });

        if (this.autoBan) {
          await sock.groupParticipantsUpdate(jid, [sender], 'remove');
          await sock.sendMessage(jid, {
            text: `✅ Removido. Enganar o clã Uchiha não será tolerado.`,
            mentions: [sender],
          });
        }
      }
    } catch (e) {
      console.error('antiFakeAdvanced error', e);
    }
  },
};
