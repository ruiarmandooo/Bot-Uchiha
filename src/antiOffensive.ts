// Anti-Texto-ofensivo — detecta xingamentos simples
const offensiveWords = ['idiot', 'stupid', 'noob', 'tonto'];

module.exports = async (sock, msg) => {
  const jid = msg.key.remoteJid;
  const content = msg.message.conversation?.toLowerCase();
  if (!content) return false;

  if (offensiveWords.some((w) => content.includes(w))) {
    await sock.sendMessage(jid, { text: '⚠️ Linguagem ofensiva detectada!' });
    return true;
  }
  return false;
};
