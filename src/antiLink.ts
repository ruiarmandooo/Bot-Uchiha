module.exports = {
  name: 'antiLink',

  init(ctx) {
    // Nada necessário no init
  },

  async onMessage({ sock, msg, text, CONFIG }) {
    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;

    if (!text) return;
    if (!text.includes('http://') && !text.includes('https://')) return;

    // Permit VIP/ADM
    const metadata = await sock.groupMetadata(jid).catch(() => null);
    const isAdmin =
      metadata?.participants?.some(
        (p) =>
          p.id === sender && (p.admin === 'admin' || p.admin === 'superadmin'),
      ) || false;

    const isVIP =
      (CONFIG.vipUsers || []).includes(sender) ||
      (ctx?.VIP || []).includes(sender);

    if (isAdmin || isVIP) return;

    // Se for grupo
    if (jid.endsWith('@g.us')) {
      await sock.sendMessage(jid, {
        text: `🚫 *LINK DETECTADO!* @${sender.split('@')[0]}`,
        mentions: [sender],
      });

      await sock.sendMessage(jid, { delete: msg.key });
    }
  },
};
