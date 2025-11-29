// commands/profile.js
const { getUser } = require('../features/profile');
const { getXP } = require('../features/xp');
const { getBalance } = require('../features/economy');
const config = require('../conf.js');

module.exports = {
  name: 'profile',
  description: 'Mostra informações do seu perfil',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const user = getUser(userId);

    if (!user)
      return sock.sendMessage(jid, {
        text: '⚠️ Você não está registrado! Use !register <nome>.',
      });

    const xpData = getXP(userId);
    const balance = getBalance(userId);

    const text =
      `👤 Perfil — ${user.name}\n\n` +
      `🕹️ Level: ${xpData.level}\n` +
      `✨ XP: ${xpData.xp}/${xpData.level * 100}\n\n` +
      `💰 Wallet: ${balance.wallet} | Banco: ${balance.bank}\n` +
      `🌟 VIP: ${user.vip ? 'Sim' : 'Não'}\n` +
      `📅 Registrado em: ${new Date(user.registeredAt).toLocaleDateString()}`;

    await sock.sendMessage(jid, { text });
  },
};
