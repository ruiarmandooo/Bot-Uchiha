// commands/criar-lembrete.js
module.exports = {
  name: 'criar-lembrete',
  description: 'Cria lembrete simples',
  run: async ({ sock, msg, args }) => {
    if (args.length < 2)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Use: !remind <tempo em segundos> <mensagem>',
      });
    const time = parseInt(args[0]);
    const text = args.slice(1).join(' ');
    await sock.sendMessage(msg.key.remoteJid, {
      text: `⏳ Lembrete programado em ${time}s: "${text}"`,
    });
    setTimeout(async () => {
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🔔 Lembrete: "${text}"`,
      });
    }, time * 1000);
  },
};
