// antiFake.js
// Heurística simples: avisa e (opcionalmente) remove contas com formato estranho.
// Configure allowedCountryCodes em config.js (ex: ["55","244","351"])

const config = require('../config');

module.exports = {
  name: 'antiFake',

  init(ctx) {
    this.config = config.antiFake || {};
    // default: don't auto ban, only warn
    this.autoBan = this.config.autoBan || false;
    this.allowed = this.config.allowedCountryCodes || [];
  },

  async onMessage({ sock, msg, text }) {
    try {
      if (!msg.key.remoteJid || !msg.key.remoteJid.endsWith('@g.us')) return;
      const sender = msg.key.participant || msg.key.remoteJid;
      // phone part before @
      const phone = sender.split('@')[0];
      // if phone contains non-digits or length too short -> suspect
      const onlyDigits = phone.replace(/\D/g, '');
      if (onlyDigits.length < 8) {
        await sock.sendMessage(msg.key.remoteJid, {
          text: `⚠️ Usuário suspeito detectado: @${phone}\nFormato inválido.`,
          mentions: [sender],
        });
        if (this.autoBan) {
          try {
            await sock.groupParticipantsUpdate(
              msg.key.remoteJid,
              [sender],
              'remove',
            );
            await sock.sendMessage(msg.key.remoteJid, {
              text: `✅ Removido por antiFake: @${phone}`,
              mentions: [sender],
            });
          } catch (e) {
            /* ignore */
          }
        }
      } else if (this.allowed.length > 0) {
        const matched = this.allowed.some((code) =>
          onlyDigits.startsWith(code),
        );
        if (!matched) {
          await sock.sendMessage(msg.key.remoteJid, {
            text: `⚠️ Número fora dos códigos permitidos: @${phone}`,
            mentions: [sender],
          });
        }
      }
    } catch (e) {
      console.error('antiFake error', e);
    }
  },
};
