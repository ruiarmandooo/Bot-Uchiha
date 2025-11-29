// autoReact.js
// Faz uma "reação" simples: responde com emoji (não usa message.reaction API para compatibilidade)

module.exports = {
  name: 'autoReact',
  init() {
    // set default emoji or read from config
    this.emoji = '👍🏽';
  },

  async onMessage({ sock, msg, text }) {
    try {
      // auto-reage apenas em grupos e quando palavra-chave encontrada (personalizável)
      const jid = msg.key.remoteJid;
      if (!jid.endsWith('@g.us')) return;

      if (!text) return;
      const triggers = ['obrigado', 'obg', 'valeu', 'brigado'];
      if (triggers.some((t) => text.toLowerCase().includes(t))) {
        await sock.sendMessage(jid, {
          text: this.emoji,
          contextInfo: {
            mentionedJid: [msg.key.participant || msg.key.remoteJid],
          },
        });
      }
    } catch (e) {
      console.error('autoReact error', e);
    }
  },
};
