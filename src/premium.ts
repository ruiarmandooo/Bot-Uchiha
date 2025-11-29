// commands/premium.js
const { setVIP, isVIP, getUser } = require('../features/premium');
const config = require('../conf.js');

module.exports = {
  name: 'premium',
  description: 'Gerencia status VIP/Premium',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const user = getUser(userId);

    if (!user)
      return sock.sendMessage(jid, {
        text: '⚠️ Você não está registrado! Use !register <nome>.',
      });

    const action = args[0]?.toLowerCase();

    if (!action) {
      const vipStatus = isVIP(userId) ? '✅ Ativo' : '❌ Inativo';
      return sock.sendMessage(jid, { text: `🌟 Status VIP: ${vipStatus}` });
    }

    if (action === 'activate') {
      setVIP(userId, true);
      return sock.sendMessage(jid, { text: '✅ VIP/Premium ativado!' });
    }

    if (action === 'deactivate') {
      setVIP(userId, false);
      return sock.sendMessage(jid, { text: '❌ VIP/Premium desativado!' });
    }

    await sock.sendMessage(jid, {
      text: '⚠️ Comando inválido! Use !premium [activate|deactivate]',
    });
  },
};
