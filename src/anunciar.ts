module.exports = {
  name: 'anunciar',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!config.vipUsers.includes(msg.key.participant || jid))
      return sock.sendMessage(jid, { text: '❌ Apenas VIP/Admin' });

    const texto = args.join(' ');
    if (!texto)
      return sock.sendMessage(jid, { text: 'Use: !anunciar <mensagem>' });

    const grupos = Object.keys(sock.chats || {}).filter((j) =>
      j.endsWith('@g.us'),
    );
    for (const g of grupos) {
      await sock.sendMessage(g, { text: texto });
    }
  },
};
