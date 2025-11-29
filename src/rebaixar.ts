module.exports = {
  name: 'rebaixar',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!config.vipUsers.includes(msg.key.participant || jid))
      return sock.sendMessage(jid, { text: '❌ Apenas VIP/Admin' });

    const [user] = args;
    if (!user)
      return sock.sendMessage(jid, { text: 'Use: !rebaixar @usuário' });

    try {
      await sock.groupParticipantsUpdate(
        jid,
        [user.replace('@', '')],
        'demote',
      );
      await sock.sendMessage(jid, { text: `✅ Usuário rebaixado: ${user}` });
    } catch {
      await sock.sendMessage(jid, { text: '❌ Falha ao rebaixar o usuário.' });
    }
  },
};
