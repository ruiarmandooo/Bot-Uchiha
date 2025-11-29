// commands/info-user.js
module.exports = {
  name: 'info-user',
  description: 'Mostra informações do usuário',
  run: async ({ sock, msg }) => {
    const user = msg.key.participant || msg.key.remoteJid;
    const jid = user.split('@')[0];
    const text = `🕵️‍♂️ Usuário: @${jid}\nID completo: ${user}\nTipo de chat: ${msg.key.remoteJid.endsWith('@g.us') ? 'Grupo' : 'Privado'}`;
    await sock.sendMessage(msg.key.remoteJid, { text, mentions: [user] });
  },
};
