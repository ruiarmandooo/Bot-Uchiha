// commands/loja-bot.js
const config = require('../conf.js');

// Loja de exemplo
const shopItems = [
  { name: 'VIP', price: 500 },
  { name: 'Premium Badge', price: 1000 },
  { name: 'Boost XP', price: 250 },
];

module.exports = {
  name: 'loja-bot',
  description: 'Mostra a loja com itens disponíveis',
  run: async ({ sock, msg }) => {
    const jid = msg.key.remoteJid;

    let text = `🛒 ${config.botName} — Loja\n\n`;
    shopItems.forEach((item, idx) => {
      text += `#${idx + 1} - ${item.name} — ${item.price} coins\n`;
    });

    text += `\nUse !buy <número> para comprar.`;

    await sock.sendMessage(jid, { text });
  },
};
