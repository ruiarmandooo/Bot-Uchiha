module.exports = {
  name: 'lembrete',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const tempo = parseInt(args[0]);
    const texto = args.slice(1).join(' ');
    if (!tempo || !texto)
      return sock.sendMessage(jid, {
        text: 'Use: !lembrete <segundos> <mensagem>',
      });

    await sock.sendMessage(jid, {
      text: `⏱ Lembrete definido para ${tempo} segundos.`,
    });
    setTimeout(async () => {
      await sock.sendMessage(jid, { text: `🔔 Lembrete: ${texto}` });
    }, tempo * 1000);
  },
};
