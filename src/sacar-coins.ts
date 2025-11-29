// commands/sacar-coins.js
const { withdraw, getBalance } = require('../features/economy');
const config = require('../conf.js');

module.exports = {
  name: 'sacar-coins',
  description: 'Saca coins do banco para sua wallet',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const amount = parseInt(args[0]);

    if (!amount || amount <= 0)
      return sock.sendMessage(jid, { text: '⚠️ Quantidade inválida!' });

    if (withdraw(userId, amount)) {
      const bal = getBalance(userId);
      await sock.sendMessage(jid, {
        text: `✅ Sacado ${amount} coins\nWallet: ${bal.wallet} | Banco: ${bal.bank}`,
      });
    } else {
      await sock.sendMessage(jid, { text: '⚠️ Saldo insuficiente no banco!' });
    }
  },
};
