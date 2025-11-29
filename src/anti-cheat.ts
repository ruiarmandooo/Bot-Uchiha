module.exports = {
  name: 'anti-cheat',
  execute: async (sock, msg) => {
    const body = msg.message.conversation || '';
    const lower = body.toLowerCase();

    // Anti-link
    const link = /(chat\.whatsapp\.com|http:\/\/|https:\/\/)/gi;
    if (link.test(body))
      return sock.sendMessage(msg.key.remoteJid, {
        text: '⚠️ Link bloqueado!',
      });

    // Anti-spam simples
    const lastMsg = sock.lastMessage?.[msg.key.remoteJid];
    if (lastMsg === lower)
      return sock.sendMessage(msg.key.remoteJid, {
        text: '⚠️ Spam detectado!',
      });

    sock.lastMessage = sock.lastMessage || {};
    sock.lastMessage[msg.key.remoteJid] = lower;
  },
};
