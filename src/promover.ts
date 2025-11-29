module.exports = {
  name: 'promover',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!config.vipUsers.includes(msg.key.participant || jid))
      return sock.sendMessage(jid, { text: '❌ Apenas VIP/Admin' });

    const [user] = args;
    if (!user)
      return sock.sendMessage(jid, { text: 'Use: !promover @usuário' });

    try {
      await sock.groupParticipantsUpdate(
        jid,
        [user.replace('@', '')],
        'promote',
      );
      await sock.sendMessage(jid, { text: `✅ Usuário promovido: ${user}` });
    } catch {
      await sock.sendMessage(jid, { text: '❌ Falha ao promover o usuário.' });
    }
  },
};
