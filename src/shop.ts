// commands/shop.js
const { getBalance, withdraw } = require('../features/economy');
const { setVIP } = require('../features/profile');
const config = require('../conf.js');

const shopItems = [
  { name: 'VIP', price: 500 },
  { name: 'Premium Badge', price: 1000 },
  { name: 'Boost XP', price: 250 },
];

module.exports = {
  name: 'shop',
  description: 'Compra um item da loja',
  run: async ({ sock, msg, args }) => {
    const jid = msg.key.remoteJid;
    const userId = msg.key.participant || jid;
    const idx = parseInt(args[0]) - 1;

    if (idx < 0 || idx >= shopItems.length)
      return sock.sendMessage(jid, { text: '⚠️ Item inválido!' });

    const item = shopItems[idx];
    const bal = getBalance(userId);

    if (bal.wallet < item.price)
      return sock.sendMessage(jid, { text: '⚠️ Saldo insuficiente!' });

    withdraw(userId, item.price); // desconta do wallet

    // Aplicar efeito do item
    if (item.name === 'VIP') setVIP(userId, true);

    await sock.sendMessage(jid, {
      text: `✅ Você comprou: ${item.name} por ${item.price} coins!`,
    });
  },
};
