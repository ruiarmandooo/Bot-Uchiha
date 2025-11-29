// commands/repetir-msgs.js
module.exports = {
  name: 'repetir-msgs',
  description: 'Repete a mensagem do usuário',
  run: async ({ sock, msg, args }) => {
    if (!args.length)
      return await sock.sendMessage(msg.key.remoteJid, {
        text: '❌ Você precisa me dizer algo… até o Itachi ficaria desapontado.',
      });
    await sock.sendMessage(msg.key.remoteJid, { text: args.join(' ') });
  },
};
