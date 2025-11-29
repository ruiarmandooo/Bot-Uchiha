// commands/love.js
module.exports = {
  name: 'love',
  description: 'Calcula compatibilidade amorosa',
  run: async ({ sock, msg, args }) => {
    if (args.length < 2)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Use: !love <nome1> <nome2>',
      });
    const love = Math.floor(Math.random() * 101);
    await sock.sendMessage(msg.key.remoteJid, {
      text: `❤️ Compatibilidade entre ${args[0]} e ${args[1]}: ${love}%\nO Sharingan vê futuro promissor ou tragédia…`,
    });
  },
};
