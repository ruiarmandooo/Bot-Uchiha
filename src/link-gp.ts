module.exports = {
  name: 'link-gp',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;
    try {
      const code = await sock.groupInviteCode(jid);
      await sock.sendMessage(jid, {
        text: `📎 Link do grupo: https://chat.whatsapp.com/${code}`,
      });
    } catch {
      await sock.sendMessage(jid, { text: '❌ Falha ao gerar link.' });
    }
  },
};
