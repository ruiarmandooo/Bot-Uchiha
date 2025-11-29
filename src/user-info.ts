module.exports = {
  name: 'user-info',
  execute: async (sock, msg) => {
    const jid = msg.key.participant || msg.key.remoteJid;
    const pushName = msg.pushName || 'Usuário';
    await sock.sendMessage(jid, {
      text: `📝 Info do usuário:\nNome: ${pushName}\nJID: ${jid}`,
    });
  },
};
