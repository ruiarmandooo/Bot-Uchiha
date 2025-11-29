module.exports = {
  name: 'mute',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;
    if (!config.vipUsers.includes(msg.key.participant || jid))
      return sock.sendMessage(jid, { text: '❌ Apenas VIP/Admin' });

    try {
      await sock.groupSettingUpdate(jid, 'announcement');
      await sock.sendMessage(jid, {
        text: '🔇 Grupo silenciado (somente admins podem enviar mensagens)',
      });
    } catch {
      await sock.sendMessage(jid, { text: '❌ Falha ao silenciar o grupo.' });
    }
  },
};
