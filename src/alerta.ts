module.exports = {
  name: 'alerta',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args.length)
      return sock.sendMessage(jid, { text: 'Use: !alerta <mensagem>' });

    const texto = args.join(' ');
    const metadata = await sock.groupMetadata(jid);
    const mentions = metadata.participants.map((p) => p.id);
    await sock.sendMessage(jid, { text: texto, mentions });
  },
};
