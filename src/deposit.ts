// commands/deposit.js
const { deposit, getBalance } = require('../features/economy');
const config = require('../conf.js');

module.exports = {
  name: 'deposit',
  description: 'Deposita coins na sua conta bancária',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const amount = parseInt(args[0]);

    if (!amount || amount <= 0)
      return sock.sendMessage(jid, { text: '⚠️ Quantidade inválida!' });

    if (deposit(userId, amount)) {
      const bal = getBalance(userId);
      await sock.sendMessage(jid, {
        text: `✅ Depositado ${amount} coins\nWallet: ${bal.wallet} | Banco: ${bal.bank}`,
      });
    } else {
      await sock.sendMessage(jid, { text: '⚠️ Saldo insuficiente na wallet!' });
    }
  },
};
