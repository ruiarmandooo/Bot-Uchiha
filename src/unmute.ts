module.exports = {
  name: 'unmute',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;
    if (!config.vipUsers.includes(msg.key.participant || jid))
      return sock.sendMessage(jid, { text: '❌ Apenas VIP/Admin' });

    try {
      await sock.groupSettingUpdate(jid, 'not_announcement');
      await sock.sendMessage(jid, {
        text: '🔊 Grupo liberado para todos enviarem mensagens',
      });
    } catch {
      await sock.sendMessage(jid, { text: '❌ Falha ao liberar o grupo.' });
    }
  },
};
