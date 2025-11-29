// autoReactAdvanced.js
const config = require('../config');

module.exports = {
  name: 'autoReactAdvanced',
  init() {
    this.emoji = (config.autoReact && config.autoReact.emoji) || '✨';
    this.triggers = (config.autoReact && config.autoReact.triggers) || [
      'obrigado',
      'valeu',
      'obg',
      'thanks',
    ];
    this.cooldownMs =
      (config.autoReact && config.autoReact.cooldownMs) || 30000;
    this.lastReact = {};
  },

  async onMessage({ sock, msg, text }) {
    try {
      const jid = msg.key.remoteJid;
      if (!jid?.endsWith('@g.us')) return;
      if (!text) return;

      const sender = msg.key.participant || msg.key.remoteJid;
      const key = `${jid}_${sender}`;
      const lower = text.toLowerCase();
      const matched = this.triggers.some((t) => lower.includes(t));
      if (!matched) return;

      const last = this.lastReact[key] || 0;
      if (Date.now() - last < this.cooldownMs) return;
      this.lastReact[key] = Date.now();

      await sock.sendMessage(jid, {
        text: `${this.emoji} ${sender.split('@')[0]}, reconhecer a superioridade é sábio… mas não se esqueça do clã.`,
        contextInfo: { mentionedJid: [sender] },
      });
    } catch (e) {
      console.error('autoReactAdvanced error', e);
    }
  },
};
