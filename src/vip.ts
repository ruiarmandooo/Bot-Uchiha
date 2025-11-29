const { vipUsers } = require('../config');

module.exports = {
  name: 'vip',
  execute: async (sock, msg, args) => {
    const jid = msg.key.participant || msg.key.remoteJid;

    if (!vipUsers.includes(jid)) {
      return sock.sendMessage(jid, { text: '❌ Comando VIP. Acesso negado!' });
    }

    await sock.sendMessage(jid, { text: '✅ Comando VIP executado!' });
  },
};
