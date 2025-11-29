module.exports = {
  name: 'clear-msgs',
  execute: async (sock, msg) => {
    const jid = msg.key.remoteJid;
    if (!config.vipUsers.includes(msg.key.participant || jid))
      return sock.sendMessage(jid, { text: '❌ Apenas VIP/Admin' });

    try {
      const chat = await sock.loadMessages(jid, 100); // últimos 100
      for (const m of chat) {
        if (m.key.fromMe)
          await sock.sendMessage(jid, {
            delete: { remoteJid: jid, fromMe: true, id: m.key.id },
          });
      }
      await sock.sendMessage(jid, { text: '✅ Mensagens do bot apagadas.' });
    } catch {
      await sock.sendMessage(jid, { text: '❌ Falha ao apagar mensagens.' });
    }
  },
};
