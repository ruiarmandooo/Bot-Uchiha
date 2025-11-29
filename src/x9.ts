const users = require('../features/panel/users');

module.exports = {
  name: 'x9',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    if (!args[0])
      return sock.sendMessage(jid, { text: '❌ Use: !x9 @usuário' });

    const userId =
      args[0].replace('@', '').replace(/\D/g, '') + '@s.whatsapp.net';
    const user = users.getUser(userId);
    if (!user)
      return sock.sendMessage(jid, { text: '❌ Usuário não encontrado.' });

    await sock.sendMessage(jid, {
      text: `🔍 X9 Encontrado:\nNome: ${user.name}\nVIP: ${user.vip ? 'Sim' : 'Não'}`,
    });
  },
};
