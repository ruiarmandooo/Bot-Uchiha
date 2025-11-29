// commands/register.js
const { registerUser, getUser } = require('../features/profile');
const config = require('../conf.js');

module.exports = {
  name: 'register',
  description: 'Registra um usuário no sistema',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const name = args.join(' ') || 'Uchiha Shinobi';

    if (getUser(userId)) {
      return sock.sendMessage(jid, { text: `⚠️ Você já está registrado!` });
    }

    registerUser(userId, name);
    await sock.sendMessage(jid, {
      text: `✅ Registrado com sucesso!\nNome: ${name}\nAgora você pode usar todos os comandos do bot.`,
    });
  },
};
