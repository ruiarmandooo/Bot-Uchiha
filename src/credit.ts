const { getBalance } = require('../features/economy');
const config = require('../conf.js');

module.exports = {
  name: 'credit',
  description: 'Mostra seu saldo na wallet e no banco',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const bal = getBalance(userId);

    await sock.sendMessage(jid, {
      text: `${config.botName} Saldo\n\nWallet: ${bal.wallet} co`,
    });
  },
};
