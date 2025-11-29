module.exports = {
  name: 'enquete',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args.length)
      return sock.sendMessage(jid, {
        text: 'Use: !enquete <pergunta> | opção1 | opção2 | ...',
      });

    const texto = args
      .join(' ')
      .split('|')
      .map((t) => t.trim());
    const pergunta = texto.shift();
    const buttons = texto.map((op, i) => ({
      buttonId: `vote_${i}`,
      buttonText: { displayText: op },
      type: 1,
    }));

    await sock.sendMessage(jid, {
      text: `📊 ${pergunta}`,
      buttons,
      headerType: 1,
    });
  },
};
