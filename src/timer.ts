// commands/timer.js
module.exports = {
  name: 'timer',
  description: 'Define um cronômetro simples',
  run: async ({ sock, msg, args }) => {
    const seconds = parseInt(args[0]);
    if (!seconds)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Use: !timer <segundos>',
      });
    await sock.sendMessage(msg.key.remoteJid, {
      text: `⏳ Cronômetro iniciado por ${seconds}s… aguarde pacientemente, ninja.`,
    });
    setTimeout(async () => {
      await sock.sendMessage(msg.key.remoteJid, {
        text: `🔔 Cronômetro finalizado! ${seconds}s se passaram.`,
      });
    }, seconds * 1000);
  },
};
