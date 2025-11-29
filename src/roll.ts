// commands/roll.js
module.exports = {
  name: 'roll',
  description: 'Rola um dado de 1 a 6',
  run: async ({ sock, msg }) => {
    const num = Math.floor(Math.random() * 6) + 1;
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🎲 O dado rolou: ${num}`,
    });
  },
};
