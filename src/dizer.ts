module.exports = {
  name: 'dizer',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const texto = args.join(' ');
    if (!texto)
      return sock.sendMessage(jid, { text: 'Use: !dizer <mensagem>' });
    await sock.sendMessage(jid, { text: texto });
  },
};
