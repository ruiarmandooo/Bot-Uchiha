// commands/8ball.js
module.exports = {
  name: '8ball',
  description: 'Pergunte algo à bola 8',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Pergunta necessária… até o Itachi ficaria desapontado.',
      });
    const responses = [
      'Sim 🔥',
      'Não ❌',
      'Talvez… 🤔',
      'Nunca… ☠️',
      'Certamente… 🏹',
    ];
    const answer = responses[Math.floor(Math.random() * responses.length)];
    await sock.sendMessage(msg.key.remoteJid, {
      text: `🎱 Pergunta: ${args.join(' ')}\nResposta: ${answer}`,
    });
  },
};
